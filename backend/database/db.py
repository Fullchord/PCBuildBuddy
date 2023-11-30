import pymysql
from pymysql.cursors import DictCursor
from util.util import getEnv

# The purpose of this class is to implement a singleton interface for DatabaseConnection
# This is achieved through the use of metaclasses
class DatabaseConnectionMetaClass:
    _instance = None

    def __call__(cls, *args, **kwargs):
        if cls._instance == None:
            cls._instance = super(DatabaseConnectionMetaClass, cls).__new__(cls, *args, **kwargs)
        return cls._instance


class DatabaseConnection(DatabaseConnectionMetaClass):
    def __init__(self):

        self.connection = pymysql.connect(host=getEnv('MYSQL_HOST'),
                                        user=getEnv('MYSQL_USER'),
                                        password=getEnv('MYSQL_PASSWORD'),
                                        database=getEnv('MYSQL_DATABASE'),
                                        charset='utf8mb4',
                                        cursorclass=DictCursor,
                                        # If there are ssl encryption errors, 
                                        # check to make sure the .pem file is in the secrets folder
                                        ssl_disabled=False,
                                        ssl_ca='./secrets/DigiCertGlobalRootCA.crt.pem' 
                                        )
    
    def fetch(self, query, *args):
        with self.connection.cursor() as cursor:
            rows = cursor.execute(query, args=args)
            result = cursor.fetchone()

            while result is not None:
                yield result
                result = cursor.fetchone()

            self.connection.commit()

    def fetchAll(self, query, *args):
        return list(self.fetch(query, *args))


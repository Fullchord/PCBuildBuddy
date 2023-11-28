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


class DatababaseConnection(DatabaseConnectionMetaClass):
    def __init__(self):

        self.connection = pymysql.connect(host=getEnv('MYSQL_HOST'),
                                          user=getEnv('MYSQL_USER'),
                                          password=getEnv('MYSQL_PASSWORD'),
                                          database=getEnv('MYSQL_DATABASE'),
                                          charset='utrf8mb',
                                          cursorclass=DictCursor
                                          )
    
    def fetch(self, query, *args):
        """
        This is a general purpose query that returns all
        data within a dictionary 
        """
        with self.connection:
            with self.connection.cursor() as cursor:
                rows = cursor.execute(query, args=args)
                result = cursor.fetchone()

                self.connection.commit()
                yield result
    

    def generate(self, query, *args):
        """
        This is a special generator fu
        """
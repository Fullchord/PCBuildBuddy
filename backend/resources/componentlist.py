from flask_restful import Resource

from database.db import DatabaseConnection

class ComponentList(Resource):
    def get(self, cType): 
        return list(DatabaseConnection().fetch("SELECT * FROM test0 LIMIT 10"))


    def post(self, cType): 
        
        pass 


    def delete(self, cType): 

        pass  

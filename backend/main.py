from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)

# Need a parser for Component if we wish to match/use Ids
parser = reqparse.RequestParser()
parser.add_argument('id', type=int)

class Component(Resource):
    def get(self, cType): 
        match cType:
            case "CPU":
                cpu_id = parser.parse_args()
                cpu = next((cpu for cpu in cpus if cpu['id' == cpu_id]), None)
                
                if cpu:
                    return cpu
                else:
                    return {'error': "cpu_id was not found"}, 404

            case "COOLER":
                return
            case "MOTHERBOARD":
                return
            case "MEMORY":
                return
            case "TOWER":
                return
            case "GPU":
                return
            case "STORAGE":
                return
            case "PSU":
                return
        
        return {'error', 'Invalid cType'}, 404
    

    def post(self, cType):

        return


    def put(self, cType): 

        return
    
    
    def delete(self, cType): 

        return  


class ComponentList(Resource):
    def get(self, cType): 
        
        return


    def post(self, cType): 
        
        return 


class Search(Resource):
    def get(self, cType):

        return
    
    
    def post(self, cType):

        return
    

    def put(self, cType): 

        return
    
    
    def delete(self, cType): 

        return  
    

class Filter(Resource):
    def get(self, cType):

        return
    
    
    def post(self, cType):

        return
    

    def put(self, cType): 

        return
    
    
    def delete(self, cType): 

        return  


api.add_resource(Component, '/api/<cType>')
api.add_resource(ComponentList, '/api/retrieve-verified/<cType>')
api.add_resource(Search, '/api/Search/<cType>')
api.add_resource(Filter, '/api/filter/<cType>')


if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

from resources.componentlist import ComponentList
from resources.filter import Filter
from resources.search import Search

app = Flask(__name__)
api = Api(app)

api.add_resource(ComponentList, '/api/retrieve-verified/<cType>')
api.add_resource(Search, '/api/search/<cType>')
api.add_resource(Filter, '/api/filter/<cType>')


if __name__ == '__main__':
    app.run(debug=True)

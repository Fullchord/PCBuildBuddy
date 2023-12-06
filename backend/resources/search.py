from flask import abort, request
from flask_restful import Resource
from logging import getLogger
from database.db import DatabaseConnection
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from util.acutalizer import actualizeComponents
from retrieval import getRetriever


class Search(Resource):
    def post(self, cType):
        searchQuery = request.args.get("search", type=str)
        if not searchQuery:
            abort(406)

        cType = ComponentType.fromStr(cType)

        if cType == ComponentType.UNDEFINED:
            abort(406)
        
        compRet = getRetriever(cType)
        if compRet is None:
            getLogger().warn(f"Unable to get component retriever for {str(cType)}")
            abort(500)

        components = actualizeComponents(request.json)

        compatible = compRet.getCompatible(components)
        results = []
        for c in compatible:
            if isMatching(c.name, searchQuery):
                results.append(PcComponent.toDict(c))
        
        return results

def isMatching(cName, searchQuery):
    nameParts = cName.lower().split(" ")
    searchParts = searchQuery.lower().split(" ")

    for np in nameParts:
        for sp in searchParts:
            if sp in np:
                return True

    return False
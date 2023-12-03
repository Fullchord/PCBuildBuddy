from flask_restful import Resource
from flask import request

from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from util.acutalizer import actualizeComponents
from flask import abort
from retrieval import getRetriever

from logging import getLogger

class ComponentList(Resource):
    def post(self, cType): 
        cType = ComponentType.fromStr(cType)

        if cType == ComponentType.UNDEFINED:
            abort(406)
        
        compRet = getRetriever(cType)
        if compRet is None:
            getLogger().warn(f"Unable to get component retriever for {str(cType)}")
            abort(500)

        components = actualizeComponents(request.json)

        return compRet.getCompatible(components)

from .retriever import Retriever
from util.util import typeInComponents
from database.db import DatabaseConnection
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent

class GpuRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.GPU)
        

    def getCompatible(self, components):
        results = DatabaseConnection().fetchAll("SELECT * FROM gpu")
        return PcComponent.fromDictList(results, cType=ComponentType.GPU)
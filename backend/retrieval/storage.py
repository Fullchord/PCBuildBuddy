from .retriever import Retriever
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from database.db import DatabaseConnection


class StorageRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.STORAGE)


    def getCompatible(self, components):
        results = DatabaseConnection().fetchAll("SELECT * from storage")
        return PcComponent.fromDictList(results, cType=ComponentType.STORAGE)
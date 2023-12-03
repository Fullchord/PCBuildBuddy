from .retriever import Retriever
from util.ComponentType import ComponentType
from database.db import DatabaseConnection


class MemoryRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.MEMORY)


    def getCompatible(self, components):
        return DatabaseConnection().fetchAll("SELECT * FROM memory")        
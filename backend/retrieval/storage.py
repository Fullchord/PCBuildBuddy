from .retriever import Retriever
from util.ComponentType import ComponentType
from database.db import DatabaseConnection


class StorageRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.STORAGE)


    def getCompatable(self, components):
        return DatabaseConnection().fetchAll("SELECT * from storage")
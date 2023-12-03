from .retriever import Retriever
from util.ComponentType import ComponentType
from database.db import DatabaseConnection


class PsuRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.PSU)


    def getCompatible(self, components):
        return DatabaseConnection().fetchAll("SELECT * FROM psu")
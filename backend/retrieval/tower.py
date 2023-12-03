from .retriever import Retriever
from util.ComponentType import ComponentType
from database.db import DatabaseConnection


class TowerRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.TOWER)


    def getCompatable(self, components):
        return DatabaseConnection().fetchAll("SELECT * FROM tower")
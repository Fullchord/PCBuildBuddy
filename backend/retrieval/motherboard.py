from .retriever import Retriever
from util.ComponentType import ComponentType
from database.db import DatabaseConnection


class MotherboardRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.MOTHERBOARD)


    def getCompatable(self, components):
        return DatabaseConnection().fetchAll("SELECT * FROM motherboard")       
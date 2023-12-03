from .retriever import Retriever
from database.db import DatabaseConnection
from util.ComponentType import ComponentType

class CpuRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.CPU)


    def getCompatible(self, components):
        # Because the CPU category is the first one the user chooses, we can just return all cpus
        return DatabaseConnection().fetchAll("SELECT * FROM cpu")
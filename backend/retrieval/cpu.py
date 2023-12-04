from .retriever import Retriever
from database.db import DatabaseConnection
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent

class CpuRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.CPU)


    def getCompatible(self, components):
        # Because the CPU category is the first one the user chooses, we can just return all cpus
        return PcComponent.fromDictList(DatabaseConnection().fetchAll("SELECT * FROM cpu"), cType=ComponentType.CPU)
from .retriever import Retriever
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from database.db import DatabaseConnection
from util.util import typeInComponents
from logging import getLogger


class MemoryRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.MEMORY)


    def getCompatible(self, components):
        cpu = typeInComponents(components, ComponentType.CPU)
        if cpu is None:
            getLogger().warn("Memory retriever did not receive a CPU")
            return []

        results = DatabaseConnection().fetchAll(f"SELECT * FROM memory WHERE ddr='{cpu.specs['ddr']}'")        
        return PcComponent.fromDictList(results, cType=ComponentType.MEMORY)
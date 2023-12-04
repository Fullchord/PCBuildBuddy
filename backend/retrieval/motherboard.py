from .retriever import Retriever
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from util.util import typeInComponents
from database.db import DatabaseConnection
from logging import getLogger


class MotherboardRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.MOTHERBOARD)


    def getCompatible(self, components):
        cpu = typeInComponents(components, ComponentType.CPU)
        if cpu is None:
            getLogger().warn("Cooler retriever did not receive a CPU")
            return []

        results = DatabaseConnection().fetchAll(f"SELECT * FROM motherboard WHERE socket='{cpu.specs['socket']}'")       
        return PcComponent.fromDictList(results, cType=ComponentType.MOTHERBOARD)
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from util.util import typeInComponents
from .retriever import Retriever

from database.db import DatabaseConnection

from logging import getLogger

class CoolerRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.COOLER)


    def getCompatible(self, components):
        cpu = typeInComponents(components, ComponentType.CPU)
        if not cpu: 
            getLogger().warn("Cooler retriever did not recieve a CPU")
            return []

        results = DatabaseConnection().fetchAll(f"SELECT * FROM cooler WHERE socket={cpu.specs.socket}") 
        return results
        

from .retriever import Retriever
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from util.util import typeInComponents
from database.db import DatabaseConnection
from logging import getLogger


class TowerRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.TOWER)


    def getCompatible(self, components):
        motherboard = typeInComponents(components, ComponentType.MOTHERBOARD)
        if motherboard is None:
            getLogger().warn("PSU retriever did not recieve a motherboard in components")
            return []

        results = DatabaseConnection().fetchAll(f"SELECT * FROM tower WHERE formFactor='{motherboard.specs['formFactor']}'")
        return PcComponent.fromDictList(results, cType=ComponentType.TOWER)
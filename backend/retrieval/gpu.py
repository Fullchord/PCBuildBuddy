from .retriever import Retriever
from util.util import typeInComponents
from database.db import DatabaseConnection
from util.ComponentType import ComponentType

class GpuRetriever(Retriever):
    def __init__(self):
        super().__init__(ComponentType.GPU)
        

    def getCompatible(self, components):
        return DatabaseConnection().fetchAll("SELECT * FROM gpu")
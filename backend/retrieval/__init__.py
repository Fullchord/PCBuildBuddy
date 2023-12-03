from .cpu import CpuRetriever
from .cooler import CoolerRetriever
from .gpu import GpuRetriever
from .memory import MemoryRetriever
from .motherboard import MotherboardRetriever
from .psu import PsuRetriever
from .tower import TowerRetriever
from .storage import StorageRetriever

from util.ComponentType import ComponentType


def getRetriever(cType):
    rets = [CpuRetriever(), CoolerRetriever(), 
            GpuRetriever(), MemoryRetriever(),
            MotherboardRetriever(), PsuRetriever(),
            TowerRetriever(), StorageRetriever()]

    if type(cType) is str:
        cType = ComponentType.fromStr(cType)

    for r in rets:
        if r.cType == cType:
            return r
    
    return None

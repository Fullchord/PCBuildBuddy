from os import environ
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from logging import getLogger

def getEnv(key):
    if key in environ:
        return str(environ[key])
    return None

def getComponentTable(cType):
    if type(cType) is str:
        cType = ComponentType.fromStr(cType)

    match cType:
        case ComponentType.CPU:
            return "cpu"
        case ComponentType.COOLER:
            return "cooler"
        case ComponentType.MOTHERBOARD:
            return "motherboard"
        case ComponentType.MEMORY:
            return "memory"
        case ComponentType.TOWER:
            return "tower"
        case ComponentType.GPU:
            return "gpu"
        case ComponentType.STORAGE:
            return "storage"
        case ComponentType.PSU:
            return "psu"
    
    # This could be changed to be a more descriptive exception
    raise RuntimeError


def typeInComponents(components, cType):
    for c in components:
        if type(c) is not PcComponent:
            getLogger().warn("typeInComponents called with non-PcComponent type list") 
            continue
        
        if c.type == cType:
            return c
    
    return None

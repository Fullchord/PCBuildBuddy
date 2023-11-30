from os import environ
from util.ComponentType import ComponentType

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

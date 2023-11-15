from enum import Enum

class ComponentType(Enum):
    CPU = 0
    COOLER = 1
    MOTHERBOARD = 2
    MEMORY = 3
    TOWER = 4
    GPU = 5
    STORAGE = 6
    PSU = 7
    UNDEFINED = 8

    @staticmethod
    def ORDER():
        return [
           ComponentType.CPU,
           ComponentType.COOLER,
           ComponentType.MOTHERBOARD,
           ComponentType.MEMORY,
           ComponentType.TOWER,
           ComponentType.GPU,
           ComponentType.STORAGE,
           ComponentType.PSU 
        ]

    @staticmethod
    def FIRST():
        return ComponentType.ORDER()[0]
    
    @staticmethod
    def LAST():
        return ComponentType.ORDER()[-1]
    
    def __str__(self):
        return f"{self.name}"
    
    @staticmethod
    def fromStr(componentType: str):
        componentType = componentType.upper()
        for t in ComponentType:
            if t.name == componentType:
                return t
        return ComponentType.UNDEFINED
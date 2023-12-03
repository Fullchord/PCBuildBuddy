from util.ComponentType import ComponentType

class Retriever:
    def __init__(self, cType):
        if type(cType) is str:
            cType = ComponentType.fromStr(cType)

        self.cType = cType
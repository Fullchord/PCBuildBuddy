from logging import getLogger
from database.db import DatabaseConnection
from util.ComponentType import ComponentType
from util.PcComponent import PcComponent
from util.util import getComponentTable

def actualizeComponents(componentList: dict | None):
    """
    This function takes in a dictionary of id's and types, 
    and will convert all id's into fully dressed objects
    """
    if componentList is None:
        return []

    dressedComponents = []
    
    for component in componentList:
        c_id = component.get('id')
        c_type = component.get('type')

        if c_id is None or c_type is None:
            getLogger().warning("Actualizer unable to dress a component due to missing information!") 
            continue
        
        cType = ComponentType.fromStr(c_type)
        if cType == ComponentType.UNDEFINED:
            getLogger().warning("Actualizer found an undefined component type: %s", c_type)
            continue
        
        table = getComponentTable(cType)
        results = DatabaseConnection().fetchAll(f"SELECT * FROM {table} WHERE id={c_id}")

        if len(results) == 0:
            getLogger().warning(f"Unable to find any components in table {table} with id {c_id}")
            continue

        results[0]['type'] = str(cType)

        dressedComponents.append(PcComponent.fromDict(results[0]))
    
    return dressedComponents


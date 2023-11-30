from flask_restful import Resource
from flask import request

from util.ComponentType import ComponentType
from database.db import DatabaseConnection
from flask import abort
from retrieval.cpu import CpuRetriever
from retrieval.cooler import CoolerRetriever
from retrieval.motherboard import MotherboardRetriever
from retrieval.memory import MemeoryRetriever
from retrieval.tower import TowerRetriever
from retrieval.gpu import GpuRetriever
from retrieval.storage import StorageRetriever
from retrieval.psu import PsuRetriever

from acutalizer import actualizeComponents

class ComponentList(Resource):
    # def get(self, cType): 
    #     c = ComponentType.fromStr(cType)
    #     if c == ComponentType.UNDEFINED:
    #         abort(406)
    #     else:
    #         match cType.upper():
    #             case "CPU":
    #                 return list(DatabaseConnection().fetch("SELECT * FROM CPU"))
    #             case "COOLER":
    #                 cpuList = CoolerRetriever.getCompatable({"CPU": "i7-12700K"}, list(DatabaseConnection().fetch("SELECT * FROM COOLER"))) #TODO replace CPU with actualised data from web app
    #             case _:
    #                 abort(406)
    pass
        


    def post(self, cType): 
        c = ComponentType.fromStr(cType)
        if c == ComponentType.UNDEFINED:
            abort(406)
        else:
            match cType.upper():
                case "CPU":
                    return CpuRetriever.getCompatable(list(DatabaseConnection().fetch("SELECT * FROM CPU"))) 
                case "COOLER":
                    return CoolerRetriever.getCompatable({"CPU": "i7-12700K"}, list(DatabaseConnection().fetch("SELECT * FROM COOLER"))) #TODO replace CPU with actualised data from web app
                case "MOTHERBOARD":
                    return MotherboardRetriever.getCompatable({"CPU": "i7-12700K"}, {"COOLER": "ARCTICFREEZER2000"},list(DatabaseConnection().fetch("SELECT * FROM MOTHERBOARD"))) #TODO replace CPU,COOLER with actualised data from web app 
                case "MEMORY":
                    return MemeoryRetriever.getCompatable({"CPU": "i7-12700K"}, {"COOLER": "ARCTICFREEZER2000"},{"MOTHERBOARD": "ASUS 2000"},list(DatabaseConnection().fetch("SELECT * FROM MEMORY"))) #TODO replace CPU,COOLER,MOTHERBOARD with actualised data from web app 
                case "TOWER":
                    return TowerRetriever.getCompatable({"CPU": "i7-12700K"}, {"COOLER": "ARCTICFREEZER2000"},{"MOTHERBOARD": "ASUS 2000"},{"MEMORY": "CORSAIR 32GB 3600"},list(DatabaseConnection().fetch("SELECT * FROM TOWER"))) #TODO replace CPU,COOLER,MOTHERBOARD,MEMORY with actualised data from web app 
                case "GPU":
                    return GpuRetriever.getCompatable({"CPU": "i7-12700K"}, {"COOLER": "ARCTICFREEZER2000"},{"MOTHERBOARD": "ASUS 2000"},{"MEMORY": "CORSAIR 32GB 3600"},{"TOWER": "CORSAIR 4000D Airflow"},list(DatabaseConnection().fetch("SELECT * FROM GPU"))) #TODO replace CPU,COOLER,MOTHERBOARD,MEMORY,TOWER with actualised data from web app 
                case "STORAGE":
                    return StorageRetriever.getCompatable({"CPU": "i7-12700K"}, {"COOLER": "ARCTICFREEZER2000"},{"MOTHERBOARD": "ASUS 2000"},{"MEMORY": "CORSAIR 32GB 3600"},{"TOWER": "CORSAIR 4000D Airflow"},{"GPU", "4080 TI"},list(DatabaseConnection().fetch("SELECT * FROM STORAGE"))) #TODO replace CPU,COOLER,MOTHERBOARD,MEMORY,TOWER,STORAGE with actualised data from web app 
                case "PSU":
                    return PsuRetriever.getCompatable({"CPU": "i7-12700K"}, {"COOLER": "ARCTICFREEZER2000"},{"MOTHERBOARD": "ASUS 2000"},{"MEMORY": "CORSAIR 32GB 3600"},{"TOWER": "CORSAIR 4000D Airflow"},{"GPU", "4080 TI"},{"STORAGE": "980 PRO 1TB"},list(DatabaseConnection().fetch("SELECT * FROM PSU"))) #TODO replace CPU,COOLER,MOTHERBOARD,MEMORY,TOWER,STORAGE with actualised data from web app 
                case _:
                    abort(406)
            


    def delete(self, cType): 

        pass  

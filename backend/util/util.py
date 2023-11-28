from os import environ

def getEnv(key):
    if key in environ:
        return environ[key]
    return None
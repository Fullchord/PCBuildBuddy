from os import environ

def getEnv(key):
    print(environ[key])
    if key in environ:
        return str(environ[key])
    return None
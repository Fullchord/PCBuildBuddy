from flask_restful import Resource
from flask import url_for
from flask import send_file, abort


import os

class Image(Resource):
    def remove_extension(directory):
        return os.path.splitext(directory)[0]
    def get(self, image):
        # return url_for('static', filename='i9-14900k.jpg')

        directory = "./static"

        for dirpath, dirnames, filenames in os.walk(directory):
            for file in filenames:
                filename = Image.remove_extension(file)
                if filename == image:
                    return send_file(f"./static/{file}")
                    

        abort(404)

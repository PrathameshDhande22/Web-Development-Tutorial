""" Basics of the Flask_RESTFUL"""

# importing the required modules
from flask import Flask
from flask_restful import Api, Resource

# initializing the app
app = Flask(__name__)
api = Api(app)

# Hello World Example
class HelloWorld(Resource):
    # inheriting the resource class for defining the get,put,delete method
    def get(self):
        return {"Data": "Hello World"}

     #    creating the post request
    def post(self):
        return {"Data": "You Sent the post Request"}


# passing the parameters and arguments
class Data(Resource):
    def get(self, name: str, id: int):
        return {
            "name": name,
            "id": id
        }


# registering the Resource
api.add_resource(HelloWorld, "/hello")

# regsitering the resource with the arguments
api.add_resource(Data, "/params/<name>/<id>")

# running the application
if __name__ == '__main__':
    app.run(debug=True)

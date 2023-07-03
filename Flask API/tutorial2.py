""" Request Args Parser """

from flask import Flask
from flask_restful import Api, Resource,abort
from flask_restful.reqparse import Argument

# importing the request parser
from flask_restful.reqparse import RequestParser

app = Flask(__name__)
api = Api(app)

# initializing the request parser which indicates that these arguments should be present
employee_args = RequestParser()

# adding the required argument
employee_args.add_argument("name", help="The Name is Required", type=str)
employee_args.add_argument("salary", help="The Salary is Required", type=int)

# adding the required argument
employee_args.add_argument(
    "dept", help="Department is Required", type=str, required=True)

# storing the data in list as for the tutorial
employData = {}


# aborting the key
def keynotfound(id):
     if id not in employData:
        #   abort it from the flask_restful only
        abort(404,message=f"{id} is not in the company")

class Employee(Resource):
    def get(self, emid):
        keynotfound(emid)
        return employData[emid]

    def put(self, emid):
        # parsing the arguments
        args = employee_args.parse_args()
        employData[emid] = args
        return {"message": "Employee Added SuccessFully",
                "id": emid}

    # sending the status code

    def delete(self, emid):
        keynotfound(emid)
        dele = employData.pop(emid)
        # first returning the data then the status code
        return {"Deleted": dele}, 202

api.add_resource(Employee, "/employee/<emid>")

if __name__ == '__main__':
    app.run(debug=True)

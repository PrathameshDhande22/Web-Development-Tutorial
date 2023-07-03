""" More Concepts of Flask_RESTFUL """

from flask import Flask
from flask_restful import Api,Resource,abort,reqparse,marshal_with,fields

app=Flask(__name__)
api=Api(app)

# returning the custom header with status code
class Emp(Resource):
     def get(self):
          return {"data":"Hello World"},202,{"X-Content":"This is The Header"}

reqargs=reqparse.RequestParser()

# parsing the header arguments
headerargs=reqargs.add_argument("X-Token",required=True,location="headers")

# parsing the query parameter arguments
quereyargs=reqargs.add_argument("skip",required=True,location='args')
    
# parsing arguments through headers
class Auth(Resource):
     def get(self):
          args=reqargs.parse_args()
          print(args)
          return args       
     


api.add_resource(Emp,"/emp")
api.add_resource(Auth,"/auth")

if __name__=='__main__':
     app.run(debug=True)
""" Interacting with Database """
from flask import Flask
from flask_restful import Api,Resource,abort,reqparse,marshal_with,fields
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Float, Integer, Select, String,column


# configuration
app=Flask(__name__)
api=Api(app)
app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///data.db"
db=SQLAlchemy(app)

# creating the table
class Employee(db.Model):
     id=Column(__name_pos=Integer,primary_key=True,autoincrement=True)
     name=Column(__name_pos=String(20),nullable=False)
     salary=Column(__name_pos=Float(),nullable=False)

# initializing the request parser
emdata_args=reqparse.RequestParser()
emdata_args.add_argument("id",type=int)
emdata_args.add_argument("name",help="name is required",required=True,type=str)
emdata_args.add_argument("salary",type=int,help="Salary is required")

# creating the resource fields to be worked with database
resource_field={
     "id":fields.Integer,
     "name":fields.String,
     "salary":fields.Float
}

# creating the resource
class Emp(Resource):

     # calling these decorator to say that the return data should contains the result in the given resource fields.
     @marshal_with(fields=resource_field)
     def get(self,id):
          stmt=Select(Employee).where(Employee.id==id)
          data=db.session.execute(stmt).scalars().fetchall()
          if len(data)==0:
               abort(404,message=f"{id} Not Found")
          return data
     
     def put(self,id):
          args=emdata_args.parse_args()
          data=Employee(id=id,name=args["name"],salary=args.get("salary"))
          db.session.add(data)
          db.session.commit()
          return {"message":f"{id} Added the employee"}




api.add_resource(Emp,"/emp/<id>")

if __name__=='__main__':
     with app.app_context():
          db.create_all()
     app.run(debug=True)
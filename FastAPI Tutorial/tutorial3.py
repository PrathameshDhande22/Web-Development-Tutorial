""" Tutorial 3 : Path Parameters Metadata, Numeric Validation, Nested Model, Multiple Body Models, Embed Body, Field """

from typing import Annotated
from fastapi import FastAPI, Path, Query

app = FastAPI(debug=True, title="Tutorial", summary="Tutorial 1")


# hello world api
@app.get("/")
def hello():
    return {"message": "Hello World"}


# path parameters metadata
@app.get("/data/{item_id}")
# using the path metadata just like the query metadata parameters
def data(item_id: Annotated[str, Path(title="Fetch Item", min_length=4)]):
    return {"Data": item_id}


# pass parameter example just run this file
# it says that pass the argument in a key=value pairs only
def passparameter(*, name: str, id: int):
    print(name, id)


# passing the argument as key=value pairs
passparameter(name="prathamesh", id=404533)


# numeric validation
@app.get("/new/{id}")
# gt= greater than, le =less than equal, ge=greater than or equal to, lt=less than supports for both metadata
def newID(id: Annotated[int, Path(gt=10, le=50)], age: Annotated[int, Query(ge=5, lt=7)]):
    return {"id": id, "age": age}


# Body Multiple Parameters
# creating two models using pydantic
from pydantic import BaseModel


class Item(BaseModel):
    id: int
    name: str
    description: str | None = None
    tag: list[str]


class User(BaseModel):
    id: int
    age: int
    name: str
    status: str | None = None


from fastapi import Body


# getting the single values from the body using body metadata and passing it as a parameter
@app.put("/item")
def putNewItem(item: Item, user: User, add: Annotated[bool, Body()]):
    return {**item.dict(), **user.dict(), "to be added": add}


# embed a single value body parameter
@app.post("/item")
# using embed =true define the body using item:{}
def postItem(item: Item = Body(embed=True)):
    return {**item.dict()}


# declaring the validation and other metadata directly in the pydantic models
from pydantic import Field


# using field function
# creating the class with validation
class Item2(BaseModel):
    id: int = Field(
        title="Id of the Item", description="ID is required to register the new id", ge=101
    )
    name: str = Field(min_length=3, max_length=10)


# defining the item class in the request
@app.post("/new")
def postnw_Item(item: Annotated[Item2, Body(embed=True)]):
    return {**item.dict()}


# Nested Model
class Image(BaseModel):
    url: str
    name: str | None = None


class Item(BaseModel):
    id: int
    price: int
    name: str
    desc: str | None = None
    image: Image


@app.post("/login")
def Login(item: Item):
    return {**item.dict()}


# declaring the example in the docs
class Department(BaseModel):
    id: int = Field(examples=[12])
    name: str = Field(examples=["admin"])


@app.put("/dept/new")
def newDepartment(dept: Department):
    return dept.dict()

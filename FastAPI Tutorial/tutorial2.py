""" Tutorial 2 : Pydantic Models or Request Body, Post and Put method, Query Metadata, Required , Ellipsis, List Query Parameters """

from typing import Union
from fastapi import FastAPI

app = FastAPI(debug=True)

# importing the pydantic module with BaseModel as the class for creating the model
from pydantic import BaseModel


# creating the request body by pydantic models
class Item(BaseModel):
    id: int
    name: str
    description: str | None = None
    tax: float


# creating the post method
@app.post("/items")
def addItem(item: Item):
    # the pydantic body returns the json data only
    return item


# accessing the values or variables of the model
@app.post("/send")
def sendItem(item: Item):
    # just like the class Attribute you can access the model variables
    if item.id == 1:
        return {"message": "Id already Exists"}


# passing the query parameters as well as path parameters
@app.put("/add/{item_id}")
# here item_id is path parameters and required is the query parameter and item is the request body
def addNew(item_id: int, item: Item, required: bool = False):
    return {"item_id": item_id, "required": required, **item.dict()}


@app.get("/get")
# which means that item nae query  parameter can be str or union
def getItem(item_name: Union[str, None] = None):
    print(type(item_name))
    return {"item name": item_name}


# query parameters and validation
# importing the required library
from fastapi import Query
from typing import Annotated


# implementing the query
@app.get("/books")
# here we specified that book name should contain the max length of 10 characters only and its defualt value is none
def read_book(bookName: Annotated[str | None, Query(max_length=10)] = None):
    return {"book Name": bookName}


# ellipsis making the query parameters as required ...
@app.get("/libs")
# ... which means that the query param name is required
def library(name: Annotated[str, Query(min_length=3, max_length=15)] = ...):
    return {"library": {"name": name}}


# using required instead of ellipsis
from pydantic import Required


@app.get("/city")
# using it in the default value place
def cityname(name: Annotated[str, Query(max_length=10)] = Required):
    return {"city name": name}


# query parameter list
@app.get("/food")
# this means that the f will be an list if you pass the parameters as f=sandwich&f=rice&f=dokhla
def getFood(f: Annotated[list[str] | None, Query()] = None):
    if f is None:
        return {"Food Ordered": "No"}
    return {"Food Ordered": f}


# query parameter list with default value
@app.get("/order")
def getorder(f: Annotated[list[str], Query()] = ["umbrella", "raincoat"]):
    return {"Ordered": f}


# documenting the query parameters
# defining the title,alias,description
@app.get("/cities")
def getCity(
    q: Annotated[
        str, Query(title="A City Name", alias="city", description="To search for a city name")
    ]
):
    return {"city": q}


# specifying that not to include this
@app.get("/o")
def geto(f: Annotated[list[str], Query(include_in_schema=False)] = ["umbrella", "raincoat"]):
    return {"Ordered": f}

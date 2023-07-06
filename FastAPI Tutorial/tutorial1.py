""" Tutorial 1 : Hello World,Get Method, Query Parameters, Path Parameters, Data Types Creation """

# importing the fastapi
from fastapi import FastAPI

# initializing the fastapi class
app = FastAPI(debug=True)
# running on debug


# defining the get request
@app.get("/")
def root():
    return {"message": "hello World"}


# defining the async get request
@app.get("/async")
async def asyncapp():
    return {"message": "Async Call"}


# path parameters
@app.get("/items/{item_id}")
# variable name {variablename}
def getItemID(item_id: int):
    return {"items": item_id}


# importing the enum class adn creating the enum calsss
from enum import Enum


class Model(str, Enum):
    model1 = "alexa"
    model2 = "google"
    model3 = "bing"


# adding the created class by enum in the app
@app.get("/model/{modelname}")
def getModelName(modelname: Model):
    # comparing the values
    if modelname is Model.model1:
        return {"select Model": modelname, "message": "Alexa is Good"}
    elif modelname is Model.model2:
        return {"select Model": modelname, "message": "Google is Good"}
    return {"select Model": modelname, "message": "Bing is Good"}


# declaring the path variable consider that you are sending the file path into the server
@app.get("/file/{file_path:path}")
def read_file(file_path: str):
    # getting the file path
    return {"file path": file_path}


# defining the query parameters
@app.get("/emps")
# fastapi is smart enough to know that whether its is query parameter or not.
def getEmployees(id: int = None, name: str = ""):
    if name == "" and id is None or id == 0:
        return {"employee": "No employee"}
    elif id is None or id == 0:
        return {"employee": {"name": name}}
    elif name == "":
        return {"employee": {"id": id}}
    return {"employee": {"id": id, "name": name}}


# defining the query parameter with boolean types
@app.get("/list")
def listStudent(name: str = None, male: bool = False):
    data = {"name": name, "male": male}
    return {"list": data}


# defining multiple path and query parameters
@app.get("/data/{data_item}/redirect/{page_no}")
def multiple(data_item: str, page_no: int = 0, skip: int | None = 0):
    return {"data": {"data_item": data_item, "page no": page_no, "skip": skip}}


# That's all for the Tutorial 1

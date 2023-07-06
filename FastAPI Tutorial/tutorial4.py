""" Tutorial 4 : Cookie Parameter, Header Parameter, Response Model,Status Code,Form, File, """

import datetime
from typing import Annotated
from fastapi import FastAPI, Header
from pydantic import BaseModel

app = FastAPI(debug=True, title="Tutorial 4")


@app.get("/")
def root():
    return {"Welcome": "Hello World"}


# importing the cookie parameter
from fastapi import Cookie


# defining the cookie parameter just like the other parameter of path and query
@app.get("/cook")
def cook(id: Annotated[int, Cookie(title="A Cookie for getting")]):
    return {"id": id}


# defining the header parameter
@app.get("/food")
# some times you need to access the header like X-token but you cannot define it in the python to get rid of these we use the parameter for header as convert_underscore value can boolean
def newFood(
    Token: Annotated[str, Header()], User_Agent: Annotated[str, Header(convert_underscores=False)]
):
    # so the header will take the from the value as User_Agent bcoz fastapi convert the _ to - by giving false it will not convert
    return {"Token": Token, "user_agent": User_Agent}


# getting the multiple headers
@app.get("/multi")
# note here the token can be of multiple so we can get the all the multiple token as a list
def nestedHeader(Token: Annotated[list[str], Header()]):
    return {"Token": Token}


# return type or response model parameter
class Login(BaseModel):
    id: int
    name: str
    date: datetime.date


class Profile(BaseModel):
    name: str
    date: datetime.date


# note here we are returning the login but response model is returning the profile which means it will convert automaticaly to profile
@app.post("/register", response_model=Profile)
def registerUser(login: Login):
    return login


# returning the status code
@app.post("/login", status_code=202)
def logon():
    return {"Login": "Success"}


# returning the status code using status variable of fastapi
# importing the status code
from fastapi import status as stat


# using the status code variable
@app.put("/logout", status_code=stat.HTTP_202_ACCEPTED)
def logout():
    return {"logout": True}


# using the form fields
from fastapi import Form


# declaring the form fields just like the path,query,cookie and header
@app.get("/user/register")
def getUser(usern: Annotated[str, Form()], passw: Annotated[str, Form()]):
    return {"username": usern}


# declaring the upload file
from fastapi import UploadFile


# getting the file data and reading it
@app.post("/upload")
# declaring the upload file class
async def getFile(file: UploadFile):
    # reading the file they are async method
    filedata = await file.read()
    # getting the uploaded file filename
    return {"filename": file.filename, "filedata": filedata}

""" Tutorial 5 : Handling Errors, Path Configuration, Dependency, Response Class """

from typing import Annotated, Any
from fastapi import FastAPI, Header, Request, Response

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Hello World"}


# handling the errors
from fastapi import HTTPException

# raising the error
item = {1: ["Tomato", "Capsicum"], 2: ["chilli", "Onion"], 3: ["Spinach", "Coriander"]}


# we want to get the item of particular id
@app.get("/item/{id}")
def getItem(id: int):
    if id not in item:
        raise HTTPException(status_code=404, detail="Item Not Found")
    return item[id]


# raising the custom exception by using the previous example only
# creating the custom class exception
class ItemNotFoundException(Exception):
    def __init__(self, id):
        self.item_id = id


# importing the json response to send the response
from fastapi.responses import JSONResponse


# creating the exception handler
@app.exception_handler(ItemNotFoundException)
def handle_exception(request: Request, exec: ItemNotFoundException):
    return JSONResponse(
        content={"message": f"{exec.item_id} Not found use Below IDs", "id": list(item.keys())},
        status_code=404,
    )


# raising the custom exception
@app.get("/getitem/{id}")
def itemid(id: int):
    if id not in item:
        raise ItemNotFoundException(id=id)
    return item[id]


# path configuration and docstring
@app.get(
    "/put",
    # description="this will provide the put",
    response_description="You successfuly got",
    summary="helo this is the summary",
    tags=["put"],
)
def putitem():
    """Hello this is docstring

    **id** : Parameter
    """
    return {"id": "hello There"}


# dependency

from fastapi import Depends


# common params
async def common_params(id: int, skip: int, limit: int | None = None):
    return {"id": id, "skip": skip, "limit": limit}


# depending on common params function using depends() function
@app.get("/veg")
async def getPerson(params: Annotated[Any, Depends(common_params)]):
    return params


# using list of dependencies using dependencies as the parameter in the paths method
async def token(xt: Annotated[str, Header()]):
    if xt == "helo":
        raise HTTPException(status_code=404, detail="Token Invalid")


# adding the function as the dependency
@app.get("/verify/login", dependencies=[Depends(token)])
async def getuserwhilelogin():
    return {"item": "logo"}


# using the response class
@app.get("/response")
def getResponse(response: Response):
    response.set_cookie(key="token", value="1234")
    return {"name": "Prathamesh Dhande"}

""" Creating Hello World Flask App"""

# importing the flask
from flask import Flask

# creating the instance or object of the flask Class
app = Flask(__name__)

# routing the page on home page
@app.route("/")
def home():
    return "Hello World !"

# routing the page on /contact url
@app.route("/contact")
def contactpage():
    return "This is Contact Page"


if __name__ == "__main__":
    # running the app in debug mode
    # app.run(debug=True)

    # running the app in other port
    app.run(debug=True, port=7000)

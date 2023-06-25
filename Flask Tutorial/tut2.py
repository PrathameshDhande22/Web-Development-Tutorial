""" Rendering the HTML Files"""
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    # rendering the html files
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)

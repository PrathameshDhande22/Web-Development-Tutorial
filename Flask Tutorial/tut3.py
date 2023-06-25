""" WTF Form Validator"""

from flask import Flask, redirect, render_template
from wtforms import PasswordField, StringField
from wtforms.validators import DataRequired, InputRequired, Length
from flask_wtf import FlaskForm

app = Flask(__name__)
app.secret_key = "hello"


class MyForm(FlaskForm):
    text = StringField("name", validators=[DataRequired(
    )], name="name", description="A name is required")
    password = PasswordField("password", validators=[DataRequired(), Length(
        min=8, max=10, message="Enter the at least 8 alphabet")], name="passwor")


@app.route("/", methods=["GET", "POST"])
def home():
    form = MyForm()
    if form.validate_on_submit():
        return redirect("/success")
    else:
        # printing the errors appearing while validating
        print(form.errors)
    return render_template("validator.html", form=form)


@app.route("/success", methods=["GET", "POST"])
def successdata():
    return "<h1>Success</h1>"


if __name__ == "__main__":
    app.run(debug=True)

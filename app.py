from flask import Flasklask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/")

def index():
    render_template("home.html")

if __name__ == '__main__':
    app.run(debug=True)
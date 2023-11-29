from flask import Flask, redirect,url_for,render_template
import openai 
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)


@app.route("/app.js")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True) 
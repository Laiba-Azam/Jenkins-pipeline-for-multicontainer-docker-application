from flask import Flask
import pymongo
from pymongo import MongoClient

app = Flask(__name__)
uri = "mongodb://mongo_5:27017"
client = MongoClient(uri)
#client =  pymongo.MongoClient(uri, ssl_cert_reqs=ssl.CERT_NONE)
db = client.userdb
print(db.command('ping'))
todos = db.studentdatas
from flask import Flask, render_template
from pymongo import MongoClient
# ...


@app.route('/getuser', methods=["GET"])
def index():
    all_todos = todos.find()
    return render_template('index.html', todos=all_todos)

if __name__=="__main__":
    app.run(host="0.0.0.0",port=8887, debug=True)
from flask import Flask, request
import json
import lib.mssql
import lib.mysql
import lib.oracle
import lib.postgresql
import lib.sqlite
from flask_cors import CORS, cross_origin

app = Flask(__name__)
config = json.load(open('config.json'))
cors = CORS(app)

@app.route('/mssql', methods=["POST"])
@cross_origin()
def mssqlQuery():
    q = request.json['query']
    output = lib.mssql.runQuery(q, config)
    return {"query": q, "output": output}

@app.route('/mysql', methods=["POST"])
@cross_origin()
def mysqlQuery():
    q = request.json['query']
    output = lib.mysql.runQuery(q, config)
    return {"query": q, "output": output}

@app.route('/psql', methods=["POST"])
@cross_origin()
def psqlQuery():
    q = request.json['query']
    output = lib.postgresql.runQuery(q, config)
    return {"query": q, "output": output}

@app.route('/sqlite', methods=["POST"])
@cross_origin()
def sqliteQuery():
    q = request.json['query']
    output = lib.sqlite.runQuery(q, config)
    return {"query": q, "output": output}

@app.route('/oracle', methods=["POST"])
@cross_origin()
def oracleQuery():
    q = request.json['query']
    output = lib.oracle.runQuery(q, config)
    return {"query": q, "output": output}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
#import libraries
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

import sqlite3
import os

app = Flask(__name__)

#homepage route
@app.route("/")
def home():
    return render_template("index.html")

#connect
conn = sqlite3.connect(os.path.join("db","routes.db"))

#obtain a cursor - something to loop through via database connection
cur = conn.cursor()

#obtain details of the schema/table format from SQL table 
cur.execute("SELECT sql FROM sqlite_master WHERE name='Routes'")
headers = cur.fetchall()
mytext = headers[0][0]
headers = mytext.replace("CREATE TABLE Routes(\n  \"", "").replace("\" TEXT", "").replace("\n  \"","").replace("\n)","").split(",")

#Fetch all results
cur.execute("SELECT * FROM Routes")
rows = cur.fetchall()

finalData = dict()
finalData2 = dict()

for item in rows:
    count = 0
    interimData = dict()
    for x in range(1,22):
        interimData[headers[x]] =item[x]
    finalData[int(item[0])]=interimData

for item in rows:
    count = 0
    interimData2 = dict()
    interimData2['Airline'] =item[1]
    interimData2['Source Airport Name'] =item[5]
    interimData2['Source Airport Latitude'] =item[8]
    interimData2['Source Airport Longitude'] =item[9]
    interimData2['Destination Airport Name'] =item[13]
    interimData2['Destination Airport Latitude'] =item[16]
    interimData2['Destination Airport Longitude'] =item[17]
    finalData2[int(item[0])]=interimData2
    

# create route that returns data for plotting
@app.route("/api")
def final_data():

    return jsonify(finalData)

@app.route("/coordinates")
def coordinate_data():

    return jsonify(finalData2)


if __name__ == "__main__":
    app.run()


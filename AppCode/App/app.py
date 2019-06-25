from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

import sqlite3

app = Flask(__name__)

app.route("/")
def home():
    return render_template("index.html")

#connect
conn = sqlite3.connect("routes.db")

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

data = dict()
count = 0

for item in headers:
    columns = []
    for row in rows:
        columns.append(row[count])
    data[item] = columns
    count += 1

# create route that returns data for plotting
@app.route("/api/")
def final_data():

    return jsonify(data)


if __name__ == "__main__":
    app.run()


import mysql.connector

def runQuery(query, config):
    try:
        out = []
        conn = mysql.connector.connect(database=config['mysql']['db'], host=config['mysql']['host'], username=config['mysql']['user'], password=config['mysql']['pass'])
        cursor = conn.cursor()
        cursor.execute(query, multi=True)
        for r in cursor.fetchall():
            out.append(r)
        conn.close()
        return out
    except Exception as e:
        return str(e)
import sqlite3

def runQuery(query, config):
    try:
        conn = sqlite3.connect(config['sqlite']['path'])
        cursor = conn.cursor()
        cursor.execute(query)
        rows = cursor.fetchall()
        conn.commit()
        conn.close()
        return rows
    except Exception as e:
        return str(e)
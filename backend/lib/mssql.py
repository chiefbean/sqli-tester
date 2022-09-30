import pymssql

def runQuery(query, config):
    try:
        conn = pymssql.connect(config['mssql']['host'], config['mssql']['user'], config['mssql']['pass'], config['mssql']['db'])
        cursor = conn.cursor()
        cursor.execute(query)

        out = []
        for row in cursor:
            out.append(row)
        conn.commit()
        conn.close()
        return out
    except Exception as e:
        return str(e)

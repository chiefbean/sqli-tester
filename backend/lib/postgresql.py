import psycopg2

def runQuery(query, config):
    try:
        conn = psycopg2.connect(user=config['psql']['user'], password=config['psql']['pass'], host=config['psql']['host'], database=config['psql']['db'])
        cursor = conn.cursor()
        cursor.execute(query)
        records = cursor.fetchall()
        conn.commit()
        conn.close()
        return records
    except Exception as e:
        cursor.close()
        conn.close()
        return str(e)
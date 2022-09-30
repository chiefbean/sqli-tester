import oracledb

def runQuery(query, config):
    try:
        out = []
        with oracledb.connect(user=config['oracle']['user'], password=config['oracle']['pass'], dsn=config['oracle']['cs']) as connection:
            with connection.cursor() as cursor:
                for r in cursor.execute(query):
                    out.append(r)
        return out
    except Exception as e:
        return str(e)
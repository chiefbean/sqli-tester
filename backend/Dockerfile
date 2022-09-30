FROM python

EXPOSE 5001

RUN mkdir /app
COPY . /app

WORKDIR /app

RUN apt-get update && apt-get install -y freetds-dev

RUN pip install -r requirements.txt

ENTRYPOINT ["python3", "app.py"]
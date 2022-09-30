FROM node:latest

EXPOSE 4200

WORKDIR /app
COPY . /app

RUN npm install
RUN npm install codemirror @ctrl/ngx-codemirror
RUN npm install -g @angular/cli

RUN ng analytics off

CMD ng serve --host 0.0.0.0 --port 4200 --disable-host-check
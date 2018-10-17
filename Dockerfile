FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

# RUN npm install

CMD [ "npm", "run", "web-watch" ]
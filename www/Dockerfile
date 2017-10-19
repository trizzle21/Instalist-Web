FROM ubuntu
MAINTAINER tdross21@gmail.com

FROM node:0.10.38

RUN mkdir /src

RUN npm install nodemon -g

# Create app directory
WORKDIR /src

COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]


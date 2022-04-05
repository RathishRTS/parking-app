FROM node:latest

WORKDIR /home

COPY ./parking-app /home/app

RUN cd /home/app && yarn && yarn start
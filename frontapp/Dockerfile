FROM node:18-alpine as builder

WORKDIR /build

COPY package*json ./ 

RUN npm install --force

COPY ./ ./

ARG REACT_APP_BOOKS_API
ARG REACT_APP_UNIVERSITIES_API
ARG REACT_APP_NEWS_API
ARG REACT_APP_MOVIES_API

ENV REACT_APP_BOOKS_API=${REACT_APP_BOOKS_API}
ENV REACT_APP_UNIVERSITIES_API=${REACT_APP_UNIVERSITIES_API}
ENV REACT_APP_NEWS_API=${REACT_APP_NEWS_API}
ENV REACT_APP_MOVIES_API=${REACT_APP_MOVIES_API}
RUN npm run build

FROM node:18-alpine

WORKDIR /app

RUN npm install serve -g

COPY --from=builder --chown=node:node /build/build ./build

EXPOSE 3000

USER node

CMD ["serve", "-s", "build" , "-l", "tcp://0.0.0.0:3000"]


## Stage 1: Build Stage
#FROM node:18-alpine AS builder
#
## Set working directory
#WORKDIR /app
#
## Copy package.json and package-lock.json
#COPY package*.json ./
#
## Install dependencies
#RUN npm install
#
## Copy the rest of the application files
#COPY . .
#
## Build the application
#RUN npm run build
#
## Stage 2: Production Stage
#FROM nginx:1.19.0
#
## Set working directory to Nginx default directory
#WORKDIR /usr/share/nginx/html
#
## Remove default Nginx static files
#RUN rm -rf ./*
#
## Copy build output from builder stage
#COPY --from=builder /app/build .
#
## Expose port 3000 for the frontend
#EXPOSE 3000
#
## Start Nginx server
#ENTRYPOINT ["nginx", "-g", "daemon off;"]

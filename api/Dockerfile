FROM node:18

WORKDIR /usr/src/api
COPY . /usr/src/api/

EXPOSE 8081
RUN npm i
ENTRYPOINT npm run migrate && npm run start
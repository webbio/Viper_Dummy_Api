FROM node:10.15.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json package-lock.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/

CMD npm run start

EXPOSE 5000
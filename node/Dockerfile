FROM node:18.13.0

WORKDIR /usr/src/node

COPY package-lock.json /usr/src/node
COPY package.json /usr/src/node

RUN npm install

COPY . /usr/src/node

CMD ["npm","run","start"]
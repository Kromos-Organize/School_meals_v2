FROM node:18-alpine

WORKDIR /var/www/schoolmeals.d

COPY package*.json ./

RUN yarn

COPY . .

COPY ./public ./public

CMD [ "yarn", "dev" ]
FROM node:18-alpine

WORKDIR /var/www/schoolmeals.d

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

# COPY ./public ./public

CMD [ "yarn", "start" ]
FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

RUN pip install -r requirements.txt

EXPOSE 3000

CMD ["npm", "start"]
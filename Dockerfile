FROM node

ENV INSTALL_PATH /onebitforms-client

RUN npm install -g @angular/cli

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY . .

RUN npm install

CMD ["npm", "start"]

FROM kkarczmarczyk/node-yarn:latest
MAINTAINER thibaut.mottet@gmail.com

RUN yarn global add http-server

WORKDIR /workspace
COPY . .
RUN yarn install
RUN yarn add --force node-sass #Fix problem node-sass not working during build phase
RUN yarn build

EXPOSE 8080

CMD http-server -g -c864000 /workspace/dist
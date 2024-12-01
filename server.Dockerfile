FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/app
ADD src src/
COPY *.json ./

RUN npm install
RUN npm run build-server-prod

CMD ["node", "build/index.js"]

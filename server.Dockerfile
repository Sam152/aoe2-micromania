# Build Stage
FROM --platform=linux/amd64 node:22-slim AS build

WORKDIR /usr/app

# Add and install dependencies
ADD src src/
COPY *.json ./
COPY *.js ./
RUN npm install
RUN npm run build-server-prod

# Production Stage
FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/app/build ./build
COPY --from=build /usr/app/node_modules ./node_modules
COPY *.json ./

CMD ["node", "build/index.js"]

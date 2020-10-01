# Build the source code
FROM node:14.11.0-alpine3.12 AS builder
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY src/ src/

RUN npm ci
RUN npm run build
RUN npm prune --production

FROM buildkite/puppeteer:5.2.1

WORKDIR /opt/nvidia-snatcher/

COPY --from=builder /build/node_modules/ node_modules/
COPY --from=builder /build/build/ build/

CMD [ "node", "./build/index.js" ]

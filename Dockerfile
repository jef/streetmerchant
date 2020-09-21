FROM node:14-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY tsconfig*.json ./
COPY src src
RUN npm run build


FROM zenika/alpine-chrome:with-node
USER chrome
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD 1
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
WORKDIR /usr/src/app
COPY --chown=chrome package.json package-lock.json ./
COPY --chown=chrome tsconfig*.json ./
RUN npm install
COPY --from=builder --chown=chrome /usr/src/app/build/ build/
ENTRYPOINT [ "tini","--", "node", "build/index.js" ]





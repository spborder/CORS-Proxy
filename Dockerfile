FROM node:25-bookworm-slim

ENV HOST=0.0.0.0
ENV PORT=8070

COPY . /
WORKDIR /

RUN npm install --global --verbose cors-anywhere

CMD ["node","server.js"]

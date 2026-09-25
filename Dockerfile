FROM node:22-alpine
WORKDIR /app
COPY package.json bridge.mjs README.md ./
RUN npm install --omit=dev && chmod +x bridge.mjs
CMD ["node", "bridge.mjs"]

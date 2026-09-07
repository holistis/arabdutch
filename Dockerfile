FROM node:22-bookworm AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-bookworm AS runtime
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
ENV PORT=3001
EXPOSE 3001
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]

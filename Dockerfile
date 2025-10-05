# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --fund=false
COPY . .
RUN npm run build

# --- Production stage ---
FROM nginx:1.27-alpine AS prod
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



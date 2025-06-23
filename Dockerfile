# Стадия 1: билдим Node-приложение
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Стадия 2: используем nginx для отдачи статики
FROM nginx:alpine

# Копируем билд из предыдущей стадии
COPY --from=build /app/dist /usr/share/nginx/html

# (необязательно) если нужен кастомный nginx конфиг:
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

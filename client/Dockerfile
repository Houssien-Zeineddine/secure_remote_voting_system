# Build stage
FROM node:20-alpine AS build

WORKDIR /app/client
COPY package*.json ./
RUN npm ci
COPY . .
# Create .env file from build arg
ARG VITE_API_URL
RUN echo "VITE_API_URL=${VITE_API_URL}" > .env
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/client/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

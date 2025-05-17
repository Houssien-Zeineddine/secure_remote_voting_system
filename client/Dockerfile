# Build Stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY client/package*.json ./
RUN npm ci

# Copy source code
COPY client/ ./

# Build static site
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy built site to Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY client/nginx.conf /etc/nginx/conf.d/default.conf

# Expose default HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

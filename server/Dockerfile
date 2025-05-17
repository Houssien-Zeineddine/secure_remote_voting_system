# Use the Bitnami Laravel image
FROM bitnami/laravel:latest

# Set working directory
WORKDIR /app

# Copy Laravel app source code into container
COPY server/ ./

# Copy environment file
COPY server/.env .env

# Install PHP dependencies (excluding dev)
RUN composer install --optimize-autoloader --no-dev

# Set permissions for cache and storage
RUN chown -R daemon:daemon /app/storage /app/bootstrap/cache

# Switch to non-root user for security
USER daemon

# Expose Laravel development port
EXPOSE 8000

# Start Laravel server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]

# Use Bitnami Laravel image
FROM bitnami/laravel:latest

# Set working directory - using Bitnami's Laravel directory structure
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN composer install --optimize-autoloader --no-dev

# Create and set proper permissions for Laravel directories
RUN mkdir -p /app/storage/logs \
    && mkdir -p /app/storage/framework/cache/data \
    && mkdir -p /app/storage/framework/sessions \
    && mkdir -p /app/storage/framework/testing \
    && mkdir -p /app/storage/framework/views \
    && chmod -R 775 /app/storage \
    && chmod -R 775 /app/bootstrap/cache \
    && chown -R bitnami:daemon /app

# Change to non-root user for security
USER bitnami

# Expose port
EXPOSE 8000

# Start command
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]


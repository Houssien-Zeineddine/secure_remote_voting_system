# Use Bitnami Laravel image
FROM bitnami/laravel:latest

# Set working directory
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN composer install --optimize-autoloader --no-dev && \ 
    composer require fakerphp/faker --dev

# Set permissions
RUN chown -R daemon:daemon /app/storage /app/bootstrap/cache

# Switch to non-root user
USER daemon

# Expose port
EXPOSE 8000

# Start command
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
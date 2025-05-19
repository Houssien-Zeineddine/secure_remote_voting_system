FROM bitnami/laravel:latest

WORKDIR /app

# Create PsySH directory and set permissions first
RUN mkdir -p /app/storage/psysh && \
    chmod -R 775 /app/storage/psysh && \
    chown -R daemon:daemon /app/storage /app/bootstrap/cache

# Set PsySH config dir in PHP INI
RUN echo "env[PSYSH_CONFIG_DIR] = /app/storage/psysh" >> /opt/bitnami/php/etc/php-fpm.d/www.conf && \
    echo "env[PSYSH_CONFIG_DIR] = /app/storage/psysh" >> /opt/bitnami/php/etc/php.ini

COPY . .

# Install dependencies
RUN composer install --optimize-autoloader --no-dev && \
    composer require fakerphp/faker --dev

USER daemon

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
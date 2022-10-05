docker run --name mysql -d \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=123456 \
    -e MYSQL_USER=root \
    -e MYSQL_DATABASE=testdb \
    --restart unless-stopped \
    mysql
FROM postgres:14 as suga-test-backend
WORKDIR /app
COPY ./scripts/init.sh /docker-entrypoint-initdb.d
COPY ./scripts/dump.sql ./scripts/suga-test-backend/dump.sql
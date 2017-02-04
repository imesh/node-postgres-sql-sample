# Orders API

This API exposes following API resouces:

```
HTTP POST /api/v1/orders/
HTTP GET /api/v1/orders/
HTTP GET /api/v1/orders/:orderId
HTTP PUT /api/v1/orders/:orderId
HTTP DELETE /api/v1/orders/:orderId

HTTP POST /api/v1/orders/:orderId/items/
HTTP GET /api/v1/orders/:orderId/itemss/
HTTP GET /api/v1/orders/:orderId/items/:orderItemId
HTTP PUT /api/v1/orders/:orderId/items/:orderItemId
HTTP DELETE /api/v1/orders/:orderId/items/:orderItemId
```

## How To Run

1. Start a PostgreSQL database server using Docker:

   ```
   docker run -p 5432:5432 --name postgres-db -e POSTGRES_PASSWORD=postgres -d postgres
   ```

2. Create a new database by executing below commands:
   
   ```bash
   docker exec -it [container-id] /bin/bash
   # Connect to postgres shell, password is postgres
   psql -h 127.0.0.1 -U postgres 
   ```

   ```SQL
   CREATE DATABASE orders;
   ```

3. Create database tables using sequelize by executing below commands:

   ```bash
   npm install sequelize-cli 
   node_modules/.bin/sequelize db:migrate
   
   ```

4. Build and start the API server by executing following command:

   ```
   npm install
   npm start
   ```

5. Refer [sample-api-requests.sh](/sequelize/sample-api-requests.sh) bash file for a set of sample curl requests.

## License
This sample source code is released under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

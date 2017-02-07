# Node Postgres SQL Sample

This sample implements a REST API in Node.js using [Express.js](http://expressjs.com/) and Postgres SQL. Database communication is done using SQL. The API exposes the following API resouces for executing CRUD operations.

```
HTTP POST /api/v1/rewards/
HTTP GET /api/v1/rewards/
HTTP PUT /api/v1/rewards/{reward-id}
HTTP DELETE /api/v1/rewards/{reward-id}
```

## Prerequisites

- *Docker*

  In this sample Docker is used for running PostgreSQL database on a deskstop machine.
  

- *Node.js*

  The API is wrcoitten in Node.

- *Express.js*

  Express has been used for implementing the API routing logic in Node.

## How To Run

Please follow below steps to try out this sample on your local machine:

1. Start a PostgreSQL database server using Docker:

   ```
   docker run -p 5432:5432 --name rewards-postgres -e POSTGRES_PASSWORD=postgres -d postgres
   ```

2. Create a new database by executing below commands:
   
   ```bash
   # Connect to postgres shell, password is postgres
   psql -h 127.0.0.1 -U postgres 
   ```

   ```SQL
   CREATE DATABASE rewards;
   ```

3. Create rewards table by executing below command:

   ```SQL
   \connect rewards;
   CREATE TABLE rewards(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, value FLOAT);
   ```

4. Build and start the API server by executing following command:

   ```
   npm install
   npm start
   ```

5. Send a HTTP POST request to add a record using the following command:

   ```bash
   curl -v -H "Content-Type: application/json" -d '{ "text":"Reward 1", "value":100 }' http://localhost:3000/api/v1/rewards/
   
   < HTTP/1.1 201 Created
   < X-Powered-By: Express
   < Content-Type: text/plain; charset=utf-8
   < Content-Length: 7
   < ETag: W/"7-Ds7rRYYflYXdepej42+Fxg"
   < Date: Thu, 12 Jan 2017 07:13:49 GMT
   < Connection: keep-alive
   <
   * Connection #0 to host localhost left intact
   ```

6. Send a HTTP GET request to list above record using the following command:

   ```bash
   curl -v http://localhost:3000/api/v1/rewards/

   < HTTP/1.1 200 OK
   < X-Powered-By: Express 
   < Content-Type: application/json; charset=utf-8
   < Content-Length: 41
   < ETag: W/"29-yTuQlE95P+jR7vpR/nd7Yg"
   < Date: Thu, 12 Jan 2017 07:13:53 GMT
   < Connection: keep-alive
   <
   * Connection #0 to host localhost left intact
   [{"id":1,"text":"Reward 1","value":100}]
   ```

7. Send a HTTP PUT reqest to update the above record using the following command:

   ```bash
   curl -v -H "Content-Type: application/json" -X PUT -d '{ "text":"Reward Record 1", "value":101 }' http://localhost:3000/api/v1/rewards/1

   < HTTP/1.1 200 OK
   < X-Powered-By: Express
   < Content-Type: text/plain; charset=utf-8
   < Content-Length: 2
   < ETag: W/"2-4KoCHiHd29bYzs7HHpz1ZA"
   < Date: Thu, 12 Jan 2017 07:19:12 GMT
   < Connection: keep-alive
   <
   * Connection #0 to host localhost left intact   
   ```

8. Send a HTTP DELETE request to delete the above record using the following command:

   ```bash
   curl -v -X DELETE http://localhost:3000/api/v1/rewards/1

   < HTTP/1.1 200 OK
   < X-Powered-By: Express
   < Content-Type: text/plain; charset=utf-8
   < Content-Length: 2
   < ETag: W/"2-4KoCHiHd29bYzs7HHpz1ZA"
   < Date: Thu, 12 Jan 2017 07:20:48 GMT
   < Connection: keep-alive
   <
   * Connection #0 to host localhost left intact
   ```
   
## Credits
Special thanks to [Michael Herman](http://www.mherman.org/) for the "[PostgreSQL and NodeJS](http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#.WHcY2LZ94sl)" blog post.

## License
This sample source code is released under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

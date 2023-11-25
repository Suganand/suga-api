### Requirement

Postgres database containing 2 tables: `vehicles` and `stateLogs`. These tables are populated with some sample data.
The `vehicles` table has the data of vehicles sold in the past, or is in the process of selling. The vehicle's current state is defined in the `state` field. The state defines the lifecycle of a vehicle, from quoted to selling and sold.

The `stateLogs` table has the history of each vehicle's state transitions, from the moment it was created with the quoted state, to the most recent state transition.

API based on a vehicle id and a timestamp, returns a vehicle's information and the vehicle's state on the given timestamp.

For example, for the following `stateLogs`:
[
{
vehicleId: 3,
state: 'quoted',
timestamp: '2022-09-11 09:11:45+00',
},
{
vehicleId: 3,
state: 'selling',
timestamp: '2022-09-11 23:21:38+00',
},
{
vehicleId: 3,
state: 'sold',
timestamp: '2022-09-12 12:41:41+00',
}
]

if the API receives the timestamp `2022-09-12T10:41:41.000Z`, the response is the vehicle data, and the state of `selling` because it's the state that the vehicle was on that point in time.

### DataBase Setup

---

Install requirements:

- docker (https://docs.docker.com/get-docker/)

To initialize this project database, run `docker compose up` from the root of this project. This will build and seed the database. By default the database runs on port `5432` and is also exposed on `5432`, if you want to change this you can update `docker-compose.yml`.

### Application Setup

---

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```

## Local Manual Testing

start the database & application as mentioned above.

Hit the below url to get the json record result
http://localhost:3000/vehicle/3?timestamp=2022-09-12T10:41:41.000Z

# TECH-TEST MiNi-API

An app demonstrating simple API implementation with Node.js, Express and MongoDB

The `api` uri preceed all API endpoints and the following endpoints are currently available

### /users

- POST `/api/users` (name: String, email: String)
- GET `/api/users`
- GET `/api/users/:user` (name of user)
- DELETE `/api/users`
- DELETE `/api/users/:user`

### /orders

- POST `/api/orders` (email: String, figureCount: Number)
- GET `/api/orders`
- GET `/api/orders/:id` (id of order)
- DELETE `/api/orders`
- DELETE `/api/orders/:id`

## Installation

```bash
> npm i
```

## Launch tests

```bash
> npm test
```

## Start server

```bash
> npm start
```

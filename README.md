# Contact Manager App

A backend application for managing contacts, built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete contacts.
- Input validation using express-validator.
- User authentication (JWT).
- Secure API with CORS and Helmet.
- Docker support for easy deployment.

## Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- express-validator
- jsonwebtoken
- dotenv
- CORS
- Helmet

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your MongoDB URI:
   ```
   MONGO_URI=<your-mongodb-uri>
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. The server will run on `http://localhost:5000`.

## API Endpoints

- `GET /api/contacts`: Retrieve all contacts.
- `POST /api/contacts`: Create a new contact.
- `GET /api/contacts/:id`: Retrieve a specific contact by ID.
- `PUT /api/contacts/:id`: Update a specific contact by ID.
- `DELETE /api/contacts/:id`: Delete a specific contact by ID.

## Docker

To run the application in a Docker container:

1. Build the Docker image:
   ```bash
   docker build -t contact-manager-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 5000:5000 contact-manager-app
   ```



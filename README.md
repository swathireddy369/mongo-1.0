# mongo-1.0
Sure! Below is a **README.md** file content for your project, explaining what it does, how to set it up, and how to use it.

---

# Bear API

This project is a simple **RESTful API** for managing **Bear** data. It is built using **Node.js** with **Express** for the server and **Mongoose** for MongoDB database management.

## Features

- **Create a Bear**: Add a new bear to the database.
- **Get All Bears**: Retrieve a list of all bears.
- **Get a Bear by ID**: Retrieve details of a specific bear by its ID.
- **Update a Bear**: Modify the details of an existing bear by its ID.
- **Delete a Bear**: Remove a bear from the database by its ID.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the API.
- **Mongoose**: MongoDB ODM (Object Data Modeling) library for easier interaction with the database.
- **MongoDB**: NoSQL database to store bear information.

## Setup Instructions

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/bear-api.git
```

### 2. Install Dependencies

Navigate into the project directory and install the required packages:

```bash
cd bear-api
npm install
```

### 3. Set Up MongoDB

Ensure you have **MongoDB** running locally on your machine. The API will connect to a MongoDB instance at `mongodb://127.0.0.1:27017/Bear`. You can download and install MongoDB from [here](https://www.mongodb.com/try/download/community).

Start MongoDB by running:

```bash
mongod
```

### 4. Start the Server

After setting up MongoDB, you can start the Express server:

```bash
npm start
```

The server will run on `http://localhost:3000`.

### 5. Testing the API

You can test the API using tools like **Postman** or **cURL**. Below are the available routes and their methods:

#### GET `/`
- **Description**: Returns a simple "Hello Bear" message.
- **Response**: `Hello Bear`

#### POST `/api/bear`
- **Description**: Creates a new bear. You need to send a **JSON body** with bear details (e.g., name, species).
- **Request Body**:
  ```json
  {
    "name": "Grizzly",
    "species": "Grizzly Bear"
  }
  ```
- **Response**: Returns the created bear object.

#### GET `/api/bear`
- **Description**: Retrieves all bears from the database.
- **Response**: A JSON array of all bears.

#### GET `/api/bear/:id`
- **Description**: Retrieves a specific bear by its ID.
- **Response**: A JSON object with the bear's details.

#### PUT `/api/bear/:id`
- **Description**: Updates the bear's details by its ID.
- **Request Body**:
  ```json
  {
    "name": "Polar",
    "species": "Polar Bear"
  }
  ```
- **Response**: Returns the updated bear object.

#### DELETE `/api/bear/:id`
- **Description**: Deletes the bear by its ID.
- **Response**: A success message indicating that the bear has been deleted.

### Example cURL Requests

- **Create a Bear**:
  ```bash
  curl -X POST http://localhost:3000/api/bear -H "Content-Type: application/json" -d '{"name": "Grizzly", "species": "Grizzly Bear"}'
  ```

- **Get All Bears**:
  ```bash
  curl http://localhost:3000/api/bear
  ```

- **Get a Bear by ID**:
  ```bash
  curl http://localhost:3000/api/bear/<bear_id>
  ```

- **Update a Bear by ID**:
  ```bash
  curl -X PUT http://localhost:3000/api/bear/<bear_id> -H "Content-Type: application/json" -d '{"name": "Polar", "species": "Polar Bear"}'
  ```

- **Delete a Bear by ID**:
  ```bash
  curl -X DELETE http://localhost:3000/api/bear/<bear_id>
  ```

## Code Overview

### `server.js`
- Sets up the **Express** server.
- Establishes a connection to the **MongoDB** database using **Mongoose**.
- Configures routes for handling bear-related API requests.

### `routes.js`
- Exports routes for the API. The routes include the endpoints to create, read, update, and delete bears.

### `BearController.js`
- Contains controller functions for handling the logic behind each API endpoint, such as:
  - `helloBear`: Sends a simple greeting.
  - `createBear`: Handles creating a new bear in the database.
  - `getAllbears`: Retrieves all bears from the database.
  - `getBearById`: Retrieves a bear by its ID.
  - `deleteById`: Deletes a bear by its ID.
  - `update`: Updates a bear by its ID.

## Troubleshooting

- **MongoDB not running**: If MongoDB is not running, the API will not be able to connect to the database. Ensure MongoDB is installed and running.
- **Port already in use**: If port 3000 is occupied, change the port in `server.js`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This `README.md` file will guide users to understand the project, set it up, and interact with the API. You can adjust and expand the instructions if necessary based on your project specifics.
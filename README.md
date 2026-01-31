# Node.js, Express & PostgreSQL User API

This project is a RESTful API built with Node.js, Express, and PostgreSQL. It was created as a training project to understand the full development lifecycle of a backend service, including database integration, containerization, and error handling.

## 📝 About The Project

This repository contains a fully functional CRUD application for managing **Users**. The goal was to practice building scalable backend architectures and understanding how different technologies interact within a containerized environment.

**Key Features:**
* **RESTful Architecture:** Follows standard HTTP methods.
* **Database Integration:** Persistent data storage using PostgreSQL.
* **Automatic Schema Setup:** Includes a script (`createUserTable`) to automatically generate necessary database tables on server start.
* **Health Check:** Root endpoint checks and displays the active database connection.
* **Containerization:** Fully containerized with Docker and Docker Compose.
* **Management UI:** Integrated with pgAdmin 4 for database administration.

## 🛠️ Technologies & Tools Used

### Tech Stack
* **Node.js** - Runtime environment
* **Express.js** - Web framework
* **PostgreSQL** - Relational database
* **Docker & Docker Compose** - Containerization
* **dotenv** - Environment variable management

### Development & Testing Tools
* **Postman** - Used for testing API endpoints (`GET`, `POST`, `PUT`, `DELETE`).
* **pgAdmin 4** - Used for visual database management.

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/hosam221/express-postgres-docker-api](https://github.com/hosam221/express-postgres-docker-api)
    cd your-repo-name
    ```

2.  **Run with Docker Compose**
    ```bash
    docker-compose up -d --build
    ```

3.  **Access the Application**
    * **API Server:** `http://localhost:3001`
    * **pgAdmin 4:** `http://localhost:5050`

## 📡 API Endpoints

The API is structured under the `/api` prefix.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/` | **Health Check:** Returns the name of the connected database. |
| **POST** | `/api/users` | Create a new user (Expects JSON body). |
| **GET** | `/api/users` | Get a list of all users. |
| **GET** | `/api/users/:id` | Get specific user details by ID. |
| **PUT** | `/api/users/:id` | Update an existing user. |
| **DELETE** | `/api/users/:id` | Delete a user. |

*(Note: The exact paths depend on how `userRoutes.js` is defined, but these are the standard conventions based on your file structure.)*

## 📚 Learning Outcomes

Through building this project, I learned how to:
* configure `dotenv` for secure environment variables.
* Implement middleware for **CORS** and **Error Handling**.
* Connect Node.js to PostgreSQL using a connection pool.
* Write initialization scripts to create SQL tables automatically.
* Dockerize a Node.js and Postgres stack.

# To-Do List API

This is a simple To-Do List API built using Express.js. The API allows you to create, read, update, and delete tasks.

## Features

- **Create a new task**: Add a task to your to-do list.
- **Retrieve all tasks**: Get a list of all tasks.
- **Update a task**: Modify the details of an existing task.
- **Delete a task**: Remove a task from the list.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-list-api.git
   cd todo-list-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

- **GET /tasks**: Retrieve all tasks.
  
  Example response:
  ```json
  [
    {
      "id": 1,
      "title": "Buy groceries",
      "completed": false
    }
  ]
  ```

- **POST /tasks**: Create a new task.
  
  Example request body:
  ```json
  {
    "title": "Learn Express.js"
  }
  ```
  Example response:
  ```json
  {
    "id": 2,
    "title": "Learn Express.js",
    "completed": false
  }
  ```

- **PUT /tasks/:id**: Update an existing task.
  
  Example request body:
  ```json
  {
    "title": "Learn Node.js",
    "completed": true
  }
  ```

- **DELETE /tasks/:id**: Delete a task by ID.

## Future Enhancements

- Implement a front-end interface using React.js or Vue.js.
- Add user authentication and authorization.
- Persist data using MongoDB or another database.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any feature you want to add or improve.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [max.allan-smith@mit-tech.co.uk](mailto:max.allan-smith@mit-tech.co.uk).

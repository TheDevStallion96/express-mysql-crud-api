# express-mysql-crud-api
express-mysql-crud-api

### Directory Structure
```
/express-mysql-crud-api   # Root project folder
│
├── /src                  # Source folder for the API logic
│   ├── /controllers      # Controller logic for handling requests
│   │   ├── customerController.js
│   │   ├── orderController.js
│   │   └── productController.js
│   │
│   ├── /models           # Database models for interacting with MySQL
│   │   ├── customerModel.js
│   │   ├── orderModel.js
│   │   └── productModel.js
│   │
│   ├── /routes           # Routes for defining API endpoints
│   │   ├── customerRoutes.js
│   │   ├── orderRoutes.js
│   │   └── productRoutes.js
│   │
│   ├── index.js          # Entry point of the application
│   └── db.js             # MySQL database connection logic
│
├── Dockerfile            # Dockerfile for building the API container
├── docker-compose.yml    # Docker Compose file for API and MySQL containers
├── package.json          # Dependencies and scripts
├── package-lock.json     # Lock file for exact dependency versions
└── README.md             # Documentation for the project
```

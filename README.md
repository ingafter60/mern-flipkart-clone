# BUILDING A FULL-FEATURED ECOMMERCE APP BY CLONNING FLIPKART USING MERN

https://www.youtube.com/watch?v=kXfRQ0NiyLI&list=PLB_Wd4-5SGAYsxD4JGaVdXll3PnoyI-AM&index=2

## VIDEO 02 - FLIPKART CLONE USER AND ADMIN REST API

### 02.1.1 - Initial setup

        new file:   .gitignore
        new file:   README.md
        new file:   backend/package.json

### 02.2.2 - Installing development dependencies

> npm install --save express express-validator mongoose

        modified:   .gitignore
        modified:   README.md
        new file:   backend/package-lock.json
        modified:   backend/package.json

### 02.3.3 - Creating environment variable (.env)

        > npm install --save dotenv
        modified:   README.md
        new file:   backend/.env
        modified:   backend/package-lock.json
        modified:   backend/package.json
        new file:   backend/src/index.server.js

### 02.4.4 - Creating Hello World from api server

        modified:   README.md
        modified:   backend/src/index.server.js

### 02.5.5 - Post request with json and install nodemone

        > npm install nodemon
        modified:   README.md
        modified:   backend/package-lock.json
        modified:   backend/package.json
        modified:   backend/src/index.server.js

### 02.6.6 - Install library body-parser to display json

        > npm install --save body-parser
        modified:   backend/src/index.server.js
        new file:   package-lock.json

### 02.7.7 - Creating database using mongoDB

        https://cloud.mongodb.com/v2/5fa364ac5d94ed04a419fbc5#clusters/connect?clusterId=Cluster0
        https://mongoosejs.com/
        modified:   .gitignore
        modified:   README.md
        modified:   backend/.env
        modified:   backend/src/index.server.js

### 02.8.9 - Creating routes to use MVC Pattern

        modified:   README.md
        modified:   backend/src/index.server.js
        new file:   backend/src/routes/user_route.js

### 02.9.9 - Adding Middleware

        modified:   README.md
        modified:   backend/src/index.server.js

### 02.10.10 - Creaing User model

        modified:   README.md
        new file:   backend/src/models/user_model.js

### 02.11.11 - Adding user schema dot virtual

        > install bcrypt: λ npm install --save bcrypt
        > sourse: npmjs.com/package/bcrypt
        modified:   README.md
        modified:   backend/package-lock.json
        modified:   backend/package.json
        modified:   backend/src/models/user_model.js


### 02.12.12 - Importing User model to routes

        modified:   README.md
        modified:   backend/src/index.server.js
        modified:   backend/src/models/user_model.js
        modified:   backend/src/routes/user_route.js

### 02.13.13 - Creating User controller and use it with the user_route

        modified:   README.md
        new file:   backend/src/controller/user_controller.js
        modified:   backend/src/routes/user_route.js
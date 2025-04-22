# MERN Landing Page

This project is a simple landing page built using the MERN stack (MongoDB, Express, React, Node.js). It features user authentication (login and signup) and displays a list of cards after successful authentication.

## Project Structure

```
mern-landing-page
├── backend
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   └── cardController.js
│   │   ├── models
│   │   │   ├── User.js
│   │   │   └── Card.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   └── cardRoutes.js
│   │   └── server.js
│   └── package.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Auth
│   │   │   │   ├── LoginForm.js
│   │   │   │   └── SignupForm.js
│   │   │   └── Card
│   │   │       └── CardItem.js
│   │   ├── pages
│   │   │   ├── AuthPage.js
│   │   │   └── DashboardPage.js
│   │   ├── services
│   │   │   ├── authService.js
│   │   │   └── cardService.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd mern-landing-page
   ```

2. Navigate to the backend directory and install dependencies:

   ```
   cd backend
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `src/config/db.js`.

4. Start the backend server:

   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:

   ```
   cd ../frontend
   npm install
   ```

6. Start the frontend application:

   ```
   npm start
   ```

### Usage

- Navigate to `http://localhost:3000` to access the application.
- Use the signup form to create a new account.
- After signing up, log in using your credentials.
- Upon successful login, you will be redirected to the dashboard displaying a list of cards.

### Features

- User authentication (signup and login)
- Display of cards fetched from the database
- Minimalistic UI inspired by HackerRank

### Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see.

### License

This project is licensed under the MIT License.
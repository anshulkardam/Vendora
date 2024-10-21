# TechTroveX

**TechTroveX** is a feature-rich e-commerce platform designed for tech enthusiasts. It offers users a seamless shopping experience for purchasing the latest gadgets and electronics. This project leverages modern frontend technologies like React, Redux, and Tailwind CSS, with a backend API built using **Node.js** and **Express.js**.

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Future Enhancements](#future-enhancements)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   **User Authentication**: Register and login functionality for users, secured using cookies.
-   **Product Catalog**: A dynamic display of products with sorting, filtering, and search capabilities.
-   **Shopping Cart**: Users can add, update, or remove items from their cart.
-   **Order Management**: Place orders and view order history.
-   **Admin Dashboard**: Admin interface for managing products, orders, and user data (if applicable).
-   **Responsive Design**: Optimized for all screen sizes with Tailwind CSS.

## Tech Stack

### Frontend:

-   **React.js**
-   **Next.js** (for server-side rendering and SEO)
-   **Redux** (for state management)
-   **Tailwind CSS** (for styling)

### Backend:

-   **Node.js** with **Express.js**
-   **PostgreSQL** (database)
-   **Cookie Authentication**

### Other tools:

-   **Axios** (for making API requests)
-   
-   **Zod** (for form validation)
-   **ESLint** and **Prettier** (for linting and formatting)

## Installation

### Frontend

1.  Clone the repository: `git clone https://github.com/yourusername/techtrovex.git`
`cd techtrovex`
2. Install dependencies: `npm install`
3. Start the Development Server: `npm run dev`
4. Open your app in the Browser at `http://localhost:3000`.

### Backend

1.  Navigate to the backend directory: `cd backend`
2. Install Dependencies: `npm install`
3. Create a `.env` file in the backend directory with your environment variables (e.g., database URL, JWT secret, etc.):
4. Start the backend server: `npm run start:dev`
5. The backend will run at `http://localhost:3000`.


## Usage

1.  After setting up both the frontend and backend, open your browser and go to `http://localhost:3000`.
2.  Create a user account and explore the features.
3.  Admin users can manage products and orders via the admin dashboard.

## API Endpoints

The backend API provides the following endpoints:

-   **`/api/products/`**: Fetch all products.
-   **`/api/products/:id`**: Fetch a single product by ID.
-   **`/api/cart/`**: Manage the shopping cart.
-   **`/api/orders/`**: Place orders and view order history.
-   **`/api/users/`**: Manage user accounts (register, login, etc.).

You can test these endpoints using tools like Postman or curl.

## Future Enhancements

-   **Payment Integration**: Implement payment gateways like Stripe or PayPal.
-   **Wishlist**: Allow users to save products for future purchases.
-   **Product Reviews**: Users can leave reviews on products.
-   **Advanced Admin Panel**: Additional analytics and insights for administrators.
-   **Multi-language support**: Add internationalization for global users.

## Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change. Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

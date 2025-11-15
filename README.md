# E-Commerce Store

This is a simple e-commerce application built with React and Vite. It allows users to view a list of products, filter them by category, and add them to a shopping cart.

## Live Demo

You can view a live demo of the application [here](https://learnline-assignment.vercel.app/).

## Features

*   View a list of products with their names, prices, and images.
*   Filter products by category.
*   Add products to a shopping cart.
*   View the items in the shopping cart.
*   See the total price of the items in the cart.
*   Responsive design for a seamless experience on different screen sizes.

## Technologies Used

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)

## How to run the project

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/learnline-assignment.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
This will start the application on `http://localhost:5173`.

## Project Structure

*   **`public/`**: This directory contains the static assets of the application.
*   **`src/`**: This directory contains the source code of the application.
*   **`src/assets/`**: This directory contains the images and other assets used in the application.
*   **`src/components/`**: This directory contains the reusable UI components.
*   **`src/Context/`**: This directory contains the React context providers for state management.
*   **`src/Data/`**: This directory contains the product data.
*   **`src/App.jsx`**: The main component of the application. It manages the layout and renders the other components.
*   **`src/main.jsx`**: The entry point of the application. It renders the `App` component.
*   **`eslint.config.js`**: This file contains the ESLint configuration for the project.
*   **`package.json`**: This file contains the project's dependencies and scripts.
*   **`vite.config.js`**: This file contains the Vite configuration for the project.

## Components

### `CategoryFilter`

This component displays a list of categories that users can select to filter the products.

### `ProductList`

This component displays a list of products. It receives the filtered list of products and renders them.

### `ShoppingCart`

This component displays the items in the shopping cart. It shows the list of items, their quantities, and the total price.

## Context

### `CartContext`

This context provides the state and functions for managing the shopping cart. It allows components to add items to the cart, update the cart, and view the cart's contents.

### `CategoryContext`

This context provides the state for managing the selected category. It allows the `CategoryFilter` component to update the selected category and the `ProductList` component to display the filtered products.

## Data

### `product.js`

This file contains an array of product objects. Each object represents a product and contains its ID, name, price, category, and image URL.

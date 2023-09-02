# React E-commerce App

A e-commerce application built with React and Redux.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
  - [Shopping Cart](#shopping-cart)
  - [Order History](#order-history)
  - [Analytics Dashboard](#analytics-dashboard)
  - [Products Filters](#products-filters)
- [Usage](#usage)


### Installation

Before you begin, ensure you have installed the following packages:

- Node.js (go to the nodejs website and download)
- npm (Node Package Manager, it will be automatically be installed with nodejs)
- yarn (run 'npm install --global yarn' to install yarn)

1. Unizip the ZIP file
2. Come to the root directory "client", command - 'cd client'
3. Install dependencies, command - 'yarn' or 'npm i'


### running-the-application

- Run the application command - 'yarn run dev' or 'npm run dev'
- The application will be available at http://localhost:5173/ in your web browser.


### features

### shopping-cart

- Add to Cart: Users can add products to their shopping cart from the product listing page.

- Quantity Adjustment: Users can adjust the quantity of items in their cart.

- Remove from Cart: Users can remove items from their cart.

- Order Summary: Users can view the order summary, including the total price, discounts, coupon codes, and convenience fees.

- Checkout: Users can proceed to checkout and place an order.


### order-history

- View Orders: Users can view their order history, including order numbers, order dates, total amounts, and order statuses.

- Order Tracking: Users can track the status of their orders from pending to delivered.


### analytics-dashboard

- User Spend Categories: The dashboard provides a line chart that visualizes user spend categories over time.

- Most Preferred Brands: Users can view a line chart that displays the popularity of brands based on the number of items purchased.


### products-filters

- Search Products: Users can search for specific products using the search functionality. Simply enter a keyword or product name in the search bar, and the app will display relevant results based on the search query.

- Filter by Brand: Users can filter products by brand. The app provides a list of available brands, and users can select one or more brands to view products exclusively from those brands.

- Price Range Filter: Users can filter products by price range. The app allows users to set a minimum and maximum price range to narrow down product choices. Products falling within the specified price range will be displayed.


### usage

1. Home Page ('/'):
Visit the home page where you can explore various products.
Add products to your cart directly from the home page.


2. Products Page ('/products'):
Navigate to the products page to access a wide range of products.
Utilize the filter section to refine product searches by criteria such as brand and price.
Easily add selected products to your cart.


3. Cart Page ('/cart'):
View and manage your shopping cart contents.
Adjust product quantities or remove items as needed.
Get a detailed breakdown of pricing, including discounts and convenience fees.


4. Checkout:
Click the checkout button to place your order.
Your order details will be saved in the app's state.


5. Dashboard ('/dashboard'):
Explore the user profile section, including username, email, number, and gender.
Access your order history to track previous purchases.
Gain insights into your spending habits and brand preferences with user analytics.

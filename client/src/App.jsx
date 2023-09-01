// // import {createBrowserRouter, RouterProvider, Route } from "react-router-dom"

// import AnalyticsDashboard from "./Components/AnalyticsDashboard/AnalyticsDashboard";
// import ShoppingCart from "./Components/Cart/Cart";
// import Filter from "./Components/Filter/Filter";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import OrderHistory from "./Components/OrderHistory/OrderHistory";
// import ProductCard from "./Components/ProductCard/ProductCard";
// import Home from "./Pages/Home/Home";
// import ProductList from "./Pages/ProductList/ProductList";
// import UserProfile from "./Pages/UserProfile/UserProfile";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <div>Hello World!</div>,
// //   },
// //   {
// //     path: "/products/:id",
// //     element: <div>Hello World!</div>,
// //   },
// //   {
// //     path: 'product/:id',

// //   }
// // ])

// function App() {
//   return <div>
//     <Header />
//     <Filter brands={["Nike", "Adidas", "Puma"]} handleFilter={(a) => console.log(a)}/>
//     <ProductCard product={{name : "Computer", price: 1000, image: "https://via.placeholder.com/150", description: "This is a computer"}}/>

//     <ShoppingCart cartItems={[{id: 1, name: "Computer", price: 1000, image: "https://via.placeholder.com/150", description: "This is a computer", quantity: 1}]}/>


//     <OrderHistory orders={[{id: 1, name: "Computer", price: 1000, image: "https://via.placeholder.com/150", description: "This is a computer", date: "2023-01-01", status: "Pending"}, {id: 1, name: "Computer", price: 1000, image: "https://via.placeholder.com/150", description: "This is a computer", date: "2023-01-01", status: "Pending"}]}/>


//     <AnalyticsDashboard spendData={[{category: "Food", amount: 100}, {category: "Clothing", amount: 200}, {category: "Electronics", amount: 300}]} brandData={[{brand: "Nike", count: 2}, {brand: "Adidas", count: 3}, {brand: "Puma", count: 1}]}/>
//     <Footer />



//     <Home featuredProducts={[{id: 1, name: "Computer", price: 1000, image: "https://via.placeholder.com/150", description: "This is a computer"}, {id: 1, name: "Computer", price: 1000, image: "https://via.placeholder.com/150", description: "This is a computer"}]}/>

//     <ProductList products={[{id: 1, name: "Computer", price: 1000, image: "https://via.placeholder.com/150", description: "This is a computer"}, {id: 1, name: "Computer", price: 1000, image: "https://via.placeholder.com/150", description: "This is a computer"}]}/>


//     <UserProfile user={{username: "John", age: 30, address: "123 Main St", email:"yJH8S@example.com"}} handleInputChange={(a) => console.log(a)}/>
//   </div>;
// }

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import ShoppingCart from './Components/Cart/ShoppingCart';
import { UserDashboard } from './Pages/UserDashboard/UserDashboard';
import "./App.css"
import { products } from './Products';

const App = () => {



  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home featuredProducts={products} />} />
          <Route path="/products" element={<ProductList products={products} />} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path='/dashboard' element={<UserDashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

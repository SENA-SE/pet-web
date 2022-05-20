import * as React from "react";
import Container from "@mui/material/Container";
import { GlobalStyle } from "./Global";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Adoption from "./Pages/Adoption";
import Navbar from "./Components/Navbar";
import PetDetail from "./Pages/PetDetail";
import Community from "./Pages/Community";
import PostDetail from "./Pages/PostDetail"
export default function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        {" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/adoption" element={<Adoption />}></Route>
          <Route path="/adoption/:id" element={<PetDetail />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/community/:id" element={<PostDetail />}></Route>


          {/* <Route path="/products/:category" element={<ProductList />}></Route>
    <Route path="/product/:id" element={<SingleProduct />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route
      path="/login"
      element={userLogin ? <Navigate to="/" /> : <Login />}
    ></Route>
    <Route
      path="/register"
      element={userLogin ? <Navigate to="/" /> : <Register />}
    ></Route> */}
        </Routes>
      </Router>
    </>
  );
}

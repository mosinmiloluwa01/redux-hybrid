import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Pages/Home/Home";
import Layout from "./components/Layout/Layout/Layout";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;

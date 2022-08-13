import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

//components
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

//react-redux
import { Provider } from "react-redux";
//redux
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/edit/:id" element={<EditProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

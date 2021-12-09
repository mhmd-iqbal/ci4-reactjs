import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const products = await axios.get("http://localhost:8080/products");
    setProducts(products.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    getProduct();
  };

  return (
    <div>
      <Link to="/add" className="btn btn-warning mt-3">
        Add New
      </Link>
      <div className="card p-3 mt-3">
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    to={`/edit/${product.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;

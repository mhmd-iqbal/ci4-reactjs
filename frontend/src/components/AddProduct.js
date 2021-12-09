import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/products", {
      title: title,
      price: price,
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

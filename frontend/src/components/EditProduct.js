/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  useEffect(() => {
    getProductById();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8080/products/${id}`, {
      title: title,
      price: price,
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;

import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="Product container-fluid min-vh-100 bg-dark-subtle">
      <h3 className="Product-title text-center text-danger py-2 rounded  bg-warning-subtle">
        Product Page
      </h3>
      <ul className=" list-group ">
        <li className=" list-group-item list-group-item-danger ">
          <Link to="/product/product-1" className="text-decoration-none">
            <small>Product-1</small>
          </Link>
        </li>
        <li className=" list-group-item list-group-item-danger ">
          <Link to="/product/product-2" className="text-decoration-none">
            <small>Product-2</small>
          </Link>
        </li>
        <li className=" list-group-item list-group-item-danger ">
          <Link to="/product/product-3" className="text-decoration-none">
            <small>Product-3</small>
          </Link>
        </li>
        <li className=" list-group-item list-group-item-danger ">
          <Link to="/product/product-4" className="text-decoration-none">
            <small>Product-4</small>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;

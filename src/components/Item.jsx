import React from "react";
import {  useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";


const Item = () => {
  const { key} = useParams();
  const location = useLocation()
  console.log(location);

  return (
    <div className="Item">
      <h1>Product detail page <strong className="text-danger">{key}</strong></h1>
      <h3>Current location URL ={location.pathname}</h3>
      <Link to="/product/key/name">
        <button className="btn btn-light">Product Detail Page</button>
      </Link>
    </div>
  );
};

export default Item;

import React from "react";
import { useParams } from "react-router";

const ItemDetail = () => {
  const { name ,key } = useParams();
  return (
    <div>
        <h1>this is sec params components </h1>
      <h1>
        <strong className="text-danger"> {key} {name}</strong>
      </h1>
    </div>
  );
};

export default ItemDetail;

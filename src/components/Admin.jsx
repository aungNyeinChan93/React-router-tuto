import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Admin = () => {
    const yourRole = "user"
    const navigate  = useNavigate()

    useEffect(()=>{
        if(yourRole !== "admin"){
            alert(`your role is ${yourRole} that have not access to permision`);
            navigate("/")
        }
    })
   
  return (
    <div>
      <h1>Admin Setting</h1>
      <h4>Your role is <span className="text-danger fs-1">{yourRole}</span></h4>
    </div>
  );
};

export default Admin;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Admin = () => {
  let [role, setRole] = useState("admin");
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "admin") {
      alert(`your role is ${role} that have not access to permision`);
      navigate("/");
    }
  }, [role]);

  return (
    <div>
      <h1>Admin Setting</h1>
      <h4>
        Your role is <span className="text-danger fs-1">{role}</span>
      </h4>
      <button onClick={() => setRole(role="user")}>change user</button>
    </div>
  );
};

export default Admin;

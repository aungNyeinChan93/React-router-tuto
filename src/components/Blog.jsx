import React  from "react";
import { Link,  } from "react-router-dom";



const Blog = () => {



  return (
    <div className="Blog  container-fluid min-vh-100 bg-dark-subtle ">
      <h3 className=" text-center text-danger py-2 rounded  bg-warning-subtle">
        Blog Page
      </h3>
      <Link to="/adminDashboard">
       <button className="btn btn-info">Admin Dashboard</button>
      </Link>
    

    </div>
  );
};

export default Blog;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home  container-fluid min-vh-100 bg-dark-subtle">
      <h3 className=" text-center text-danger py-2 rounded  bg-warning-subtle">
        Home Page
      </h3>
      <div className="image-container row p-2">
        <div className="col-12 col-lg-6 text-center mt-3">
          <img
            style={{ height: "400px", width: "400px" }}
            className="w-100"
            src="https://www.robinwieruch.de/static/6d39a0ec2530d6768d1461e5a067735e/2bef9/nested-routes-react-router.png"
            alt="react-router 1"
          />
        </div>
        <div className="col-12 col-lg-6 text-center mt-3">
          <img
            style={{ height: "400px", width: "400px" }}
            className="w-100"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--inxGIOId--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/h13nr4o9741dtgoscjv0.png"
            alt="react-router 1"
          />
        </div>
      </div>
      <div className="text-container p-5 ">
        <h3 className="fs-2 mb-4 text-decoration-underline">
          <Link to="https://reactrouter.com/en/main/start/overview" target="_blank">
            Feature Overview / Client Side Routing
          </Link>
        </h3>
        <p className="text-muted">
          React Router enables <strong>"client side routing"</strong>. In
          traditional websites, the browser requests a document from a web
          server, downloads and evaluates CSS and JavaScript assets, and renders
          the HTML sent from the server. When the user clicks a link, it starts
          the process all over again for a new page. Client side routing allows
          your app to update the URL from a link click without making another
          request for another document from the server. Instead, your app can
          immediately render some new UI and make data requests with fetch to
          update the page with new information. This enables faster user
          experiences because the browser doesn't need to request an entirely
          new document or re-evaluate CSS and JavaScript assets for the next
          page. It also enables more dynamic user experiences with things like
          animation.
        </p>
        <p className="text-muted">
          Nested Routes Nested Routing is the general idea of coupling segments
          of the URL to component hierarchy and data. React Router's nested
          routes were inspired by the routing system in Ember.js circa 2014. The
          Ember team realized that in nearly every case, segments of the URL
          determine: The layouts to render on the page The data dependencies of
          those layouts React Router embraces this convention with APIs for
          creating nested layouts coupled to URL segments and data.
        </p>
      </div>
    </div>
  );
};

export default Home;

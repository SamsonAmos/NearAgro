import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => (
  <div className="d-flex justify-content-center mt-5">
    <Spinner animation="border" role="status" className="opacity-10">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);
export default Loader;

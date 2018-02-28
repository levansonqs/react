import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <div className="container">
    <div class="row">
      <div className="col-md-4 col-md-offset-4">
        <h1>
          Not Found <Link to="/">Back</Link>{" "}
        </h1>
      </div>
    </div>
  </div>
);

export default NoMatch;

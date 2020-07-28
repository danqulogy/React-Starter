import React from "react";
import { Link } from "react-router-dom";

export const Widgets = () => {
  return (
    <div className="col-md-4">
      {/* Search Widget */}
      <div className="card my-4">
        <h5 className="card-header">Search</h5>
        <div className="card-body">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-group-append">
              <button className="btn btn-primary" type="button">
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="card my-4">
        <h5 className="card-header">Categories</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/">Web Design</Link>
                </li>
                <li>
                  <Link to="/">HTML</Link>
                </li>
                <li>
                  <Link to="/">Freebies</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/">JavaScript</Link>
                </li>
                <li>
                  <Link to="/">CSS</Link>
                </li>
                <li>
                  <Link to="/">Tutorials</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Side Widget */}
      <div className="card my-4">
        <h5 className="card-header">Side Widget</h5>
        <div className="card-body">
          You can put anything you want inside of these side widgets. They are
          easy to use, and feature the new Bootstrap 4 card containers!
        </div>
      </div>
    </div>
  );
};

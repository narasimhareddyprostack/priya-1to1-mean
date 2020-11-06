import React from "react";
import {
  BrowserRouter as SaiPriya,
  Link,
  Route,
  Switch, NavLink, HashRouter, Redirect
} from "react-router-dom";
import Contact from "../Forms/Contact";
import Home from "./Home";
import Discover from "./Discover";
import Services from "./Services";
function Index() {
  return (
    <div>
      <SaiPriya>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            MCart
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/discover">
                  Discover
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          {" "}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
      </SaiPriya>
    </div>
  );
}

export default Index;

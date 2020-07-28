import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Posts from "./views/Posts";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.key}>
              <Route path="/" exact={true} component={Home} />
              <Route path="/post/:id" component={Posts} />
              <Redirect to="/" />
            </Switch>
          )}
        />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

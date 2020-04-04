import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Comics from "./containers/Comics";
import ComicDetails from "./containers/ComicDetails";
import { comicFilterKeys } from "./utils/comicFilterKeys";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/_styles.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/comics/:category?" component={Comics} />
        <Route exact path="/comic/:name" component={ComicDetails} />
        <Redirect to={`/comics/${comicFilterKeys[0]}`} />
      </Switch>
    </Router>
  );
};

export default App;

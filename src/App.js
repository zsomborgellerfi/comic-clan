import React from 'react';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Comics from './containers/Comics';
import ComicDetails from './containers/ComicDetails';
import { comicsFilterKeys } from './utils/getFilteredComics/getFilteredComics';
import './styles/_styles.scss';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/comics/:category?" component={Comics} />
        <Route exact path="/comic/:name" component={ComicDetails} />
        <Redirect to={`/comics/${comicsFilterKeys[0]}`} />

      </Switch>
    </Router>
  );
}

export default App;

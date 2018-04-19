import React, {Component} from 'react';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import MoviePage from "./MoviePage";
import NotFound from "./NotFound";
import Footer from "./Footer"


export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/movie/:movieName" component={MoviePage} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer appName="netflixroulette"/>
      </ErrorBoundary>
    );
  }
}

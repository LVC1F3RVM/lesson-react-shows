import React from 'react';
import ShowList from './components/ShowList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShowPage from './components/ShowPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/show/:id'>
            <ShowPage />
          </Route>
          <Route path='/' exact>
            ShowList: <ShowList />
          </Route>
          <Route>
            <div>Error 404, page not found</div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

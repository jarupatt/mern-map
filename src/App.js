import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces></UserPlaces>
        </Route>
        <Route path="/places/new" exact>
          <NewPlace></NewPlace>
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace></UpdatePlace>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
      </main>
    </Router>
  );
};

export default App;

import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Component/Home/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Review from './Component/Dashboard/Review/Review';
import MakeAdmin from './Component/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './Component/Dashboard/AddService/AddService';
import NotFound from './Component/NotFound/NotFound';
import ServiceList from './Component/Dashboard/ServiceList/ServiceList';
import OrderedList from './Component/Dashboard/OrderedList/OrderedList';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';




export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard/review">
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/addService">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/serviceList">
          <ServiceList></ServiceList>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/orderedList">
          <OrderedList></OrderedList>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/order/:serviceId">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

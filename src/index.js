/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";
import { AuthContextProvider } from "context/authContext";
import Login from "views/Login/Login";
import ProtectedRoute from "utils/ProtectedRoute";
import ForgetPassword from "views/Login/ForgetPassword";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      {/* <Switch>
        <Route path="/login/forgetpassword" component={ForgetPassword} />
        
        <Route path="/">
          <ProtectedRoute path="/admin">
            <Admin />
          </ProtectedRoute>
          <ProtectedRoute path="/" component={Login} />
        </Route>
      </Switch> */}
      <Switch>
        <Route path="/login/forgetpassword" component={ForgetPassword} />
        <Route path="/">
          <Route path="/admin">
            <Route index component={Admin} />
          </Route>
          <Route path="/" component={Login} />
        </Route>
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
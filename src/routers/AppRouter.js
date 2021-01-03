import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
  
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";



export const AppRouter = () => {

    const { user:{logged}} = useContext(AuthContext)

    return (
    <Router>
        <div>
            <Switch>
                <PublicRoute path="/login" component={LoginScreen} isAuthenticated={logged}></PublicRoute>
                <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={logged}></PrivateRoute>
            </Switch>
        </div>
    </Router>
    )
}

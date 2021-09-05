import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const WithAuth = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

// WithAuth is a higher order component (HOC). A hoc is a component that takes in other components and
// returns a new component, much like higher order functions.
// A hoc doesn't change the presentation of a component, it adds more functionality. A hoc wraps another
// component and adds things like authorization, so a user see a component only when they log in and
// are authenticated. HOCs are perfect functions, they do not mutate the input, instead they produce a
// new output.

export default WithAuth;

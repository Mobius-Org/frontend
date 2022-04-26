import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const state = useSelector((state) => state);
  const { sign_in } = state.auth ? state.auth : null;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (sign_in) {
          return <Element {...props} />;
        } else {
          return (
            <Navigate
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export { ProtectedRoute };

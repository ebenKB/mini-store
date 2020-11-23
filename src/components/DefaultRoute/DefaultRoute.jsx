import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultRoute = ({ children }) => {
  return (
    <Route
      render = {() => (children)}
    />
  )
}

export default DefaultRoute

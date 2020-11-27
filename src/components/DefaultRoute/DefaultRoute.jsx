import React from 'react';
import { Route } from 'react-router-dom';

const DefaultRoute = ({ children }) => {
  return (
    <Route
      render = {() => (children)}
    />
  )
}

export default DefaultRoute

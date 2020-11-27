import React from 'react';
import './styles/tailwind.output.css';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultRoute from './components/DefaultRoute/DefaultRoute';
import UserDetails from './components/pages/UseDetails';
import CreateUser from './components/pages/CreateUser';
import Payment from './components/pages/Payment';
import Home from './components/pages/Home';
import Purchase from './components/pages/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <DefaultRoute>
          <Switch>
            <Route path="/" exact>
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="/:slug" exact>
              <Layout>
                <UserDetails />
              </Layout>
            </Route>
            <Route path="/customer/new">
              <Layout>
                <CreateUser/>
              </Layout>
            </Route>
            <Route path="/:slug/payment">
              <Layout>
                <Payment />
              </Layout>
            </Route>
            <Route path="/:slug/purchase">
              <Layout>
                <Purchase />
              </Layout>
            </Route>
          </Switch>
        </DefaultRoute>
      </Router>
    </div>
  );
}

export default App;

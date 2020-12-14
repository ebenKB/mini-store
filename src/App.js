import React, { useEffect } from 'react';
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
import firebase from 'firebase/app';
import 'firebase/auth' ;
import 'firebase/database';

function App() {
  useEffect(() => {
    let app = firebase.initializeApp({ 
      apiKey: "AIzaSyDT8IZZ-jjUK1J7el83zWKMo4_HZD0iYic",
      authDomain: "mini-store-92400.firebaseapp.com",
      databaseURL: "https://mini-store-92400.firebaseio.com",
      projectId: "mini-store-92400",
      storageBucket: "mini-store-92400.appspot.com",
      messagingSenderId: "640031242954",
      appId: "1:640031242954:web:f282598060c1aa451fd233",
      measurementId: "G-LEB5FWZVQW"
    });


    firebase.auth().createUserWithEmailAndPassword('eakbo23@gmail.com', 'password')
      .then((data) => {
        console.log('User has been created successfully', data);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });

      const db = firebase.database(app);
      const c = db.ref('customers')
      console.log(c);
    // firebase.auth().signInWithEmailAndPassword('example@email.com', 'password')
    // .then((data) => console.log('Signin is successful and this is the data', data))
    // .catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   if (errorCode === 'auth/wrong-password') {
    //     alert('Wrong password.');
    //   } else {
    //     alert(errorMessage);
    //   }
    //   console.log(error);
    // });

    return () => {}
  }, []);
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

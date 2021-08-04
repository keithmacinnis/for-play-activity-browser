import { Route, Switch } from 'react-router-dom';
import ActivitiesPage from './pages/ActivitiesPage';
import FavoritesPage from './pages/FavoritesPage';
import PostActivityPage from './pages/PostActivityPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
import getFirebase from '../src/firebase';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

function App() {
  const [currentUser, setCurrentUser] = useState(null); // Local signed-in state.
  // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
     const firebase = getFirebase();
     if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  if (currentUser === null) {
    return (
      <div>
        <SignInForm />
        <SignUpForm />
      </div>
    );
  }
  return ( 
  <Layout>
    <Switch>
      <Route path="/" exact>
        <ActivitiesPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      <Route path="/post">
        <PostActivityPage />
      </Route>
      <Route path="/">
        <NotFoundPage />
      </Route>
    </Switch>  
  </Layout>
  );
}

export default App;
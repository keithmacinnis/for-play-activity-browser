import { Route, Switch } from 'react-router-dom';
import ActivitiesPage from './pages/ActivitiesPage';
import FavoritesPage from './pages/FavoritesPage';
import PostActivityPage from './pages/PostActivityPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

function App() {
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

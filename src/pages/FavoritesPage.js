import { useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import ActivityList from '../components/ActivityList';

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);
    let content;
    if (favoritesContext.totalFavorites === 0){
        content = <p>Nothing Joined...</p>
    } else {
        content = <ActivityList data= {favoritesContext.favorites} />
    }

    return <section>
        <h1>Joined</h1>
        {content}
    </section>
}
export default FavoritesPage;
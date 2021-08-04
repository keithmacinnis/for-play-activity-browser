import { Link } from 'react-router-dom';
import css from './NavBar.module.css';
import { useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import SignOutButton from './SignOutButton';
import NavBarButton from './NavBarbutton';
function NavBar() {
const favContext = useContext(FavoritesContext);
    return (
    <header className={css.header}>
        <div className={css.logo}>For Play, The Neighbourhood Connector</div>
        <nav>
            <ul>
                <li>
                    <NavBarButton url ="/" title="Activities" />
                </li>
                <li>
                    <NavBarButton url ="/favorites" title="Fav'd" badgeNumber={favContext.totalFavorites}/>
                </li>
                <li>
                    <NavBarButton url="/post" title="Post" />
                </li>
                <li>
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    </header>
);
}

export default NavBar;
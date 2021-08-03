import { Link } from 'react-router-dom';
import css from './NavBar.module.css';
import { useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import SignOutButton from './SignOutButton';

function NavBar() {
const favContext = useContext(FavoritesContext);
    return (
    <header className={css.header}>
        <div className={css.logo}>For Play, The Neighbourhood Connector</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Activities</Link>
                </li>
                <li>
                    <Link to="/favorites">Joined</Link>
                    <span className={css.badge}>{favContext.totalFavorites}</span>
                </li>
                <li>
                    <Link to="/post">Post Activity</Link>
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
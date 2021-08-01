import { Link } from 'react-router-dom';
import css from './NavBar.module.css';

function NavBar() {
return (
    <header className={css.header}>
        <div className={css.logo}>For Play - The Neighbourhood Connector</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Activities</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                    <Link to="/post">Post Activity</Link>
                </li>
            </ul>
        </nav>
    </header>
);
}

export default NavBar
import NavBar from "./NavBar";
import css from "./Layout.module.css";

function Layout(props) {
    return (
    <div>
        <NavBar />
        <main className={css.main}>{props.children}</main>
    </div>
    );
}
export default Layout;
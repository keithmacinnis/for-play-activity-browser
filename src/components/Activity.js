import css from "./Activity.module.css";
import Card from "./Card";
import FavoritesContext from "../store/favorites-context";

import { useContext } from 'react';

function Activity(props) {  
    const favoritesContext = useContext(FavoritesContext);

    const itemIsFav = favoritesContext.isFav(props.activity.id);

    function addActivityHandler() {
        if (itemIsFav) {
            favoritesContext.removeFavorite(props.activity.id)
        } else {
            favoritesContext.addFavorite({
                id:             props.activity.id,
                title:          props.activity.title,
                description:    props.activity.description,
                image:          props.activity.image,
                address:        props.activity.address,
            });
        }
    }
 
    return (
        <li className={css.item}>
            <Card>
                <div className={css.image}> 
                    <img src={props.activity.image} alt={props.activity.title} />
                </div>
                <div className={css.content}>
                    <h3>{props.activity.title}</h3>
                    <address>{props.activity.address}</address>
                    <p>{props.activity.description}</p>
                </div>
                <div className={css.content}>
                    <button className={css.btngrad} onClick={addActivityHandler}>{itemIsFav ? "Leave Activity " : "Join Activity"}</button>
                </div>
            </Card>
        </li>
    );
}
export default Activity;
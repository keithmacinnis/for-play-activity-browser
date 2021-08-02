import css from "./Activity.module.css";
import Card from "./Card";

function Activity(props) {
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
                    <button className={css.btngrad}>Join Activity</button>
                </div>
            </Card>
        </li>
    );
}
export default Activity;
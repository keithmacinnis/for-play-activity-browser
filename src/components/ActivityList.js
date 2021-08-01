import Activity from "./Activity";
import css from "./ActivityList.module.css"

function ActivityList(props) {
    return (
        <ul className={css.list}>
            {props.data.map(activity => <Activity key={activity.id} activity={activity}/>)}
        </ul>
    );
}

export default ActivityList
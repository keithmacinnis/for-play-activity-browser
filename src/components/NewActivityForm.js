import Card from "./Card";
import css from "./NewActivityForm.module.css"
import { useRef } from "react";

function NewActivityForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const activityInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImageURL = imageInputRef.current.value;
        const enteredActivityType = activityInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const eneteredDesc = descriptionInputRef.current.value;

        const activityData = {
            title: enteredTitle,
            activity: enteredActivityType,
            location: enteredAddress,
            description: eneteredDesc,
            image: enteredImageURL,
        };
        console.log("Going to Post:",activityData);
        props.onPostActivity(activityData);
    }
    return (
    <Card>
        <form className={css.form} onSubmit={submitHandler}>
            <div className={css.control}>
                <label htmlFor="title">Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={css.control}>
                <label htmlFor="image">Image url</label>
                <input type="url" required id="image"  ref={imageInputRef}/>
            </div>
            <div className={css.control}>
                <label htmlFor="activity">Activity Type</label>
                <input type="text" required id="activity"  ref={activityInputRef}/>
            </div>
            <div className={css.control}>
                <label htmlFor="address">Address</label>
                <input type="address" required id="address" ref={addressInputRef} />
            </div>
            <div className={css.control}>
                <label htmlFor="description">Description</label>
                <textarea rows="5" required id="description"  ref={descriptionInputRef} />
            </div>
            <div className={css.actions}>
                <button>Post</button>
            </div>
        </form>
    </Card>
    );
}
export default NewActivityForm; 
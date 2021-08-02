import { useHistory } from "react-router-dom";
import NewActivityForm from "../components/NewActivityForm";
//receives a payload describing an activity

function PostActivityPage() {
    const history = useHistory();
    
    function postActivityHandler(data) {
        console.log("in postActivityHandler")
        fetch("https://react-for-play-test-default-rtdb.firebaseio.com/activities.json",
        {
            method: "POST",
            body:   JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        ).then (() => {
            history.replace("/");
        });
    }


    return <section>
        <h1>Add New Activity</h1>
        <NewActivityForm onPostActivity={postActivityHandler} />
    </section>
}
export default PostActivityPage;
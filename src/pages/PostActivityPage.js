import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import NewActivityForm from "../components/NewActivityForm";
import Card from "../components/Card";
import { getDatabase } from "../firebase";
import { set } from 'firebase/database';

function PostActivityPage() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function postActivityHandler(data) {
        setIsLoading(true);
        const db = getDatabase();
        const ref = db.ref("activities");
        const newPostRefAndUID = ref.push();
        newPostRefAndUID.set(data).then(() => {
            setIsLoading(false);
            history.push("/");
        });
    }

    if (isLoading) {
        return (
            <section >
            <Card>
                <h2>Uploading...</h2>
            </Card>
            </section>
        )
    }
    return <section>
        <h1>Add New Activity</h1>
        <NewActivityForm onPostActivity={postActivityHandler} />
    </section>
}
export default PostActivityPage;

//anonymous post w/ fetch : 
// function postActivityHandler(data) {
//     fetch("https://react-for-play-test-default-rtdb.firebaseio.com/activities.json",
//     {
//         method: "POST",
//         body:   JSON.stringify(data),
//         headers: {
//                 "Content-Type": "application/json"
//         }
//     }
//     ).then (() => {
//         history.push("/");
//     });
// }
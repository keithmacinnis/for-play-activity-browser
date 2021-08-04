import ActivityList from "../components/ActivityList"
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { getDatabase } from "../firebase";


function ActivitiesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [activities, setActivities] = useState([])

    useEffect(()=>{
        setIsLoading(true);
        const db = getDatabase();
        const ref = db.ref("activities");
        ref.on("value", snapshot => {
            if (snapshot && snapshot.exists()) {
                const data = snapshot.val();
                const activities = [];
                for (const key in data) {
                    const activity = {
                        id: key,
                        ...data[key]
                    };
                    activities.push(activity);
                }
                setActivities(activities);
            }
            setIsLoading(false);    
        })
    }, []);

    if (isLoading) {
        return (
            <section >
            <Card>
                <h2>Loading...</h2>
            </Card>
            </section>
        )
    }
    return <section>
        <h1>All Activities</h1>
        <ActivityList data={activities}/>
    </section>
}
export default ActivitiesPage;

//Anomonous Fetch:
        // fetch("https://react-for-play-test-default-rtdb.firebaseio.com/activities.json",
        // ).then ((response) => {
        //     return response.json(); 
        // }).then(data => {
        //     const activities = [];
        //     for (const key in data) {
        //         const activity = {
        //             id: key,
        //             ...data[key]
        //         };
        //         activities.push(activity);
        //     }
        //     setActivities(activities);
        //     setIsLoading(false);
        // });
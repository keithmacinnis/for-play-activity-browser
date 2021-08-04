import ActivityList from "../components/ActivityList"
import { useState, useEffect } from "react";
import Card from "../components/Card";

// const Dummy_Data = [
//     {
//      id:    "m1",
//      title: "Hockey Tourny",
//      activity: "Hockey",
//      location: "Whistler, BC",
//      description: "A hockey tourney in whistler bc. ",
//      image: "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/62/da/7a/62da7a85-0f13-a086-1c80-7ca444d2a1bc/source/256x256bb.jpg",
//     },
// ]

function ActivitiesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [activities, setActivities] = useState([])
    
    useEffect(()=>{
        setIsLoading(true);
        fetch("https://react-for-play-test-default-rtdb.firebaseio.com/activities.json",
        ).then ((response) => {
            return response.json(); 
        }).then(data => {
            const activities = [];
            for (const key in data) {
                const activity = {
                    id: key,
                    ...data[key]
                };
                activities.push(activity);
            }
            setActivities(activities);
            setIsLoading(false);
        });
    },
    []
    )
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
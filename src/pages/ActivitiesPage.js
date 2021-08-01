import ActivityList from "../components/ActivityList"

const Dummy_Data = [
    {
     id:    "m1",
     title: "Hockey Tourny",
     activity: "Hockey",
     location: "Whistler, BC",
     description: "A hockey tourney in whistler bc. ",
     image: "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/62/da/7a/62da7a85-0f13-a086-1c80-7ca444d2a1bc/source/256x256bb.jpg",
    },
    {
    id:    "m2",
    title: "Tennis Tourny",
    activity: "Tennis",
    location: "Whistler, BC",
    description: "A tennis tourney in whistler bc. ",
    image: "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/62/da/7a/62da7a85-0f13-a086-1c80-7ca444d2a1bc/source/256x256bb.jpg",
    },
    {
        id:    "m3",
        title: "Sunday Church Party",
        activity: "Praying",
        location: "Whistler, BC",
        description: "A pray sesh' in whistler bc. ",
        image: "https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/62/da/7a/62da7a85-0f13-a086-1c80-7ca444d2a1bc/source/256x256bb.jpg",
        },
]

function ActivitiesPage() {
    return <section>
        <h1>All Activities</h1>
        <ActivityList data={Dummy_Data}/>
        {/* <ul>
            {Dummy_Data.map((activity) => {
                return <li key={activity.id}>{activity.title}</li>;
            })}
        </ul> */}
    </section>
}
export default ActivitiesPage;
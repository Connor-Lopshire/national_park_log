// this will be a list of the users bucket list parks
// need state to hold data from fetch to parks/bucket_list_parks
// map through parks for each park render the first image in images along with the park full_name and state
// would like for image cards to appear as bulma tiles 
// each image or tile  should be a link that goes to parks/${park.id} should pass park_id as a prop to be recieved by ParkDetailsContainer
import { useEffect, useState } from "react"
import {  getBucketListParks } from "../managers/ParkManager"
import { ParkCard } from "./ParkCard"
export const BucketList = () => {
    const [parks, setParks] = useState([])
    
    const loadParks = () => getBucketListParks().then(data => setParks(data))

    useEffect(() => {
        loadParks()
    }, [])

    return (<section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
            Bucket List National Parks
            </p>

            <div className="panel-block">
                <ParkCard parks={parks} loadParks={loadParks}/>
            </div>
        </article>
    </section>)
}
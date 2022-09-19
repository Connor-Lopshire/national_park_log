// this will be a list of the users visited parks
// need state to hold data from fetch to parks/visited_parks
// map through parks for each park render the first image in images along with the park full_name and state
// would like for image cards to appear as bulma tiles 
// each image or tile  should be a link that goes to parks/${park.id} should pass park_id as a prop to be recieved by ParkDetailsContainer
import { useEffect, useState } from "react"
import {  getBucketListParks, getVisitedParks } from "../managers/ParkManager"
import { ParkCard } from "./ParkCard"
import { VisitedParkCard } from "./VisitedParkCard"
export const VisitedParks = () => {
    const [parks, setParks] = useState([])
    
    const loadParks = () => getVisitedParks().then(data => setParks(data))

    useEffect(() => {
        loadParks()
    }, [])

    return (<section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
               Visited National Parks
            </p>

            <div className="panel-block">
                <VisitedParkCard parks={parks} loadParks={loadParks} />
            </div>
        </article>
    </section>)
}
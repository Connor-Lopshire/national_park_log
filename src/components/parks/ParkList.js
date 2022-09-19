// this will render the home page list of parks
// need state to hold data from fetch call to /parks
// map through parks for each park render the first image in images along with the park full_name and state
// would like for image cards to appear as bulma tiles 
// each image or tile  should be a link that goes to parks/${park.id} should pass park_id as a prop to be recieved by ParkDetailsContainer

import { useEffect, useState } from "react"
import { getAllParks } from "../managers/ParkManager"
import { ParkCard } from "./ParkCard"
export const ParkList = () => {
    const [parks, setParks] = useState([])
    
    const loadParks = () => getAllParks().then(data => setParks(data))

    useEffect(() => {
        loadParks()
    }, [])

    return (<section className="section">
        <article className="panel is-info">
            <p className="panel-heading">
                National Parks
            </p>

            <div className="panel-block">
                <ParkCard parks={parks} loadParks={loadParks} />
            </div>
        </article>
    </section>)
}
    

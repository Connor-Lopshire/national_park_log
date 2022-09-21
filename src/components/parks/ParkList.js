// this will render the home page list of parks
// need state to hold data from fetch call to /parks
// map through parks for each park render the first image in images along with the park full_name and state
// would like for image cards to appear as bulma tiles 
// each image or tile  should be a link that goes to parks/${park.id} should pass park_id as a prop to be recieved by ParkDetailsContainer

import { useEffect, useState } from "react"
import { getAllParks } from "../managers/ParkManager"
import { ParkCard } from "./ParkCard"
import { ParkSearch } from "./ParkSearch"
export const ParkList = () => {
    const [parks, setParks] = useState([])
    const [previous, setPrevious] = useState()
    const [next, setNext] = useState()
    const [link, setLink] = useState(null)


    const loadParks = (link, q, state) => getAllParks(link, q, state).then(data => {
        setParks(data.results)
        setPrevious(data.previous)
        setNext(data.next)
    })

    useEffect(() => {
        loadParks(link)
    }, [])

    return (<section className="section">
        <article className="panel is-info">
                <ParkSearch setParks={setParks} loadParks={loadParks}/>
            <p className="panel-heading">
                National Parks
            </p>

            <div className="panel-block">
                <ParkCard parks={parks} loadParks={loadParks} />
            </div>
        </article>
        {previous == null ?

            <button onClick={(evt) => {
                evt.preventDefault()
                loadParks(next)
                
                
            }}>Next </button>
            :
            <>
                <button onClick={(evt) => {
                    evt.preventDefault()
                    loadParks(next)
                }}>Next </button>
                <button onClick={(evt) => {
                    evt.preventDefault()
                    loadParks(previous)
                }}>previous </button>
            </>
        }
    </section>)
}


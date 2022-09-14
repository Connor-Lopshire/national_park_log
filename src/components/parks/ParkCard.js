import { useEffect, useState } from "react"
import { getAllParks } from "../managers/ParkManager"
export const ParkCard = ({ parks }) => {
    return <section>

    { parks.map(park => {

        
        return <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={park?.images[0]?.url} alt={park?.images[0]?.alt_text}/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{park.full_name}</p>
                    <p className="subtitle is-6">{park.state}</p>
                </div>
            </div>

            <div className="content">
                { park.visited = false ?
                <button className="button">Visited</button>
                :
                <button className="button">Add Visit</button>

                }
                <button className="button ">Bucket List</button>
                <button className="button ">Information</button>

            </div>
        </div>
    </div>
        })
    }
    </section>
} 





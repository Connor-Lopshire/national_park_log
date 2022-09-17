import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { addToBucketList, addToVisitedList, getAllParks, removeBucketList } from "../managers/ParkManager"
export const ParkCard = ({ parks }) => {
    const [date, setDate] = useState()
    const [active, setActive] = useState(false)
    const [currentPark, setCurrentPark] = useState()
    const [activeRemoveModal, setActiveRemoveModal] = useState(false)


    return <section>

        {parks.map(park => {


            return <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={park?.images[0]?.url} alt={park?.images[0]?.alt_text} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={park?.images[0]?.url} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{park.full_name}</p>
                            <p className="subtitle is-6">{park.state}</p>
                        </div>
                    </div>

                    <div className="content">
                        {park.visited == false ?
                            <button className="button" onClick={(evt) => {
                                evt.preventDefault()
                                setActive(true)
                                setCurrentPark(park.id)
                            }} >Log Visit</button>
                            :
                            <button className="button" onClick={(evt) => {
                                evt.preventDefault()
                                setActive(true)
                                setCurrentPark(park.id)

                            }}>Add Another Visit</button>

                        }

                        {park.in_bucket == false ?

                            <button className="button " onClick={(evt) => {
                                evt.preventDefault()
                                return addToBucketList(park.id)
                            }}> Add Bucket List</button> :
                            <button className="button " onClick={(evt) => {
                                evt.preventDefault()
                                setCurrentPark(park.id)
                                setActiveRemoveModal(true)
                            }}>Remove Bucket List</button>
                        }


                        <Link to={`/parks/${park.id}`} >
                            <button className="button ">Information</button>
                        </Link>

                    </div>
                </div>
            </div>
        })
        }
        {/* MODAL FOR VISIT DATE */}
        <div className={`modal ${active ? "is-active" : ""}`} >
            <div className="modal-background"></div>
            <div className="modal-content">
                <form>
                    <div className="field mt-6">
                        <label className="label"> Visited Date:</label>
                        <div className="control">
                            <input
                                required autoFocus
                                type="date"
                                step="any"
                                className="input is-rounded"
                                placeholder="visitDate"
                                value={date}
                                onChange={
                                    (evt) => {

                                        setDate(evt.target.value)


                                    }} />
                        </div>
                        <button className='button' onClick={(evt) => {
                            evt.preventDefault()
                            return addToVisitedList(currentPark, { date: date }).then(setActive(false))
                        }}>submit</button>
                        <button className="button" onClick={(evt) => {
                            evt.preventDefault()
                            setActive(false)
                        }} >Cancel</button>
                    </div>
                </form>

            </div>

        </div>
          {/* MODAL FOR REMOVE FROM BUCKET LIST */}
        <div className={`modal ${activeRemoveModal ? "is-active" : ""}`} >
            <div className="modal-background"></div>
            <div className="modal-content">
                <div>Remove From Bucket List ?</div>
                <button className='button' onClick={(evt) => {
                    evt.preventDefault()
                    removeBucketList(currentPark)
                    setActiveRemoveModal(false)
                }} >Remove</button>
                <button className="button" onClick={(evt) => {
                    evt.preventDefault()
                    setActiveRemoveModal(false)
                }} >Cancel</button>
            </div>

        </div>
    </section>
}





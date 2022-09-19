import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addParkReview, addToBucketList, addToVisitedList, getAllParks, removeBucketList } from "../managers/ParkManager"
export const ParkCard = ({ parks, loadParks }) => {
    const [date, setDate] = useState()
    const [active, setActive] = useState(false)
    const [currentPark, setCurrentPark] = useState()
    const [activeRemoveModal, setActiveRemoveModal] = useState(false)
    const [activeReviewModal, setActiveReviewModal] = useState(false)
    const [review, setReview] = useState()
    const navigate = useNavigate()


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
                            : <>
                                <button className="button" onClick={(evt) => {
                                    evt.preventDefault()
                                    setActive(true)
                                    setCurrentPark(park.id)

                                }}>Add Another Visit</button>
                                <button className="button" onClick={(evt) => {
                                    evt.preventDefault()
                                    setActiveReviewModal(true)
                                    setCurrentPark(park.id)

                                }}>Add Review</button>
                            </>


                        }

                        {park.in_bucket == false ?

                            <button className="button " onClick={(evt) => {
                                evt.preventDefault()
                                addToBucketList(park.id)
                                loadParks()
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
                            addToVisitedList(currentPark, { date: date }).then((res)=>{
                                setActive(false)    
                                loadParks()
                            })
                            

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
                    removeBucketList(currentPark).then(() => {
                        setActiveRemoveModal(false)
                    loadParks()
                    })
                }} >Remove</button>
                <button className="button" onClick={(evt) => {
                    evt.preventDefault()
                    setActiveRemoveModal(false)
                }} >Cancel</button>
            </div>

        </div>
        {/* MODAL FOR ADDING Review  */}
        <div className={`modal ${activeReviewModal ? "is-active" : ""}`} >
            <div className="modal-background"></div>
            <div className="modal-content">
                <form>
                    <div className="field mt-6">
                        <label className="label"> Leave Review:</label>
                        <div className="control">
                            <input
                                required autoFocus
                                type="text"
                                step="any"
                                className="input is-rounded"
                                placeholder="Review"
                                value={review}
                                onChange={
                                    (evt) => {

                                        setReview(evt.target.value)


                                    }} />
                        </div>
                        <button className='button' onClick={(evt) => {
                            evt.preventDefault()
                            addParkReview(currentPark, { content: review }).then(() => {
                            setActiveReviewModal(false)
                            navigate(`/parks/${currentPark}`)
                            }
                            )
                        }}>submit</button>
                        <button className="button" onClick={(evt) => {
                            evt.preventDefault()
                            setActiveReviewModal(false)
                        }} >Cancel</button>
                    </div>
                </form>

            </div>

        </div>
    </section>
}





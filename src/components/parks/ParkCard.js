import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addParkReview, addToBucketList, addToVisitedList, getAllParks, removeBucketList } from "../managers/ParkManager"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ParkCard = ({ parks, loadParks }) => {

    const [date, setDate] = useState()
    const [active, setActive] = useState(false)
    const [currentPark, setCurrentPark] = useState()
    const [activeRemoveModal, setActiveRemoveModal] = useState(false)
    const [activeReviewModal, setActiveReviewModal] = useState(false)
    const [review, setReview] = useState()
    const navigate = useNavigate()
    const notifyBucketListAdd = () => {
        toast.success('Added to Bucket List!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const notifyVisitedListAdd = () => {
        toast.success('Visit Logged!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const notifyBucketListRemove = () => {
        toast.success('Removed from Bucket List!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return <section className="park_container">

        {parks.map(park => {


            return <div className="card mt-6 mx-3">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={park?.images[0]?.url} alt={park?.images[0]?.alt_text} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        
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
                            <>
                            <button className="button " onClick={(evt) => {
                                evt.preventDefault()
                                addToBucketList(park.id)
                                loadParks()
                                notifyBucketListAdd()
                            }}> Add Bucket List</button> 
                            </>:
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
                        <label className="label has-text-white"> Visited Date:</label>
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
                                notifyVisitedListAdd()
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
                <div className="has-text-white">Remove From Bucket List ?</div>
                <button className='button' onClick={(evt) => {
                    evt.preventDefault()
                    removeBucketList(currentPark).then(() => {
                        setActiveRemoveModal(false)
                    loadParks()
                    notifyBucketListRemove()
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
                        <label className="label has-text-white"> Leave Review:</label>
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





import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { addToBucketList, addToVisitedList, getAllParks, removeBucketList, removeVisit } from "../managers/ParkManager"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const VisitedParkCard = ({ parks, loadParks }) => {
    const [date, setDate] = useState()
    const [active, setActive] = useState(false)
    const [currentPark, setCurrentPark] = useState()
    const [currentParkVisit, setCurrentParkVisit] = useState()

    const [activeRemoveModal, setActiveRemoveModal] = useState(false)
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
    const notifyVisitedRemoved = () => {
        toast.success('Visit Removed!', {
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


            return <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={park?.park?.images[0]?.url} alt={park?.park?.images[0]?.alt_text} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={park?.park?.images[0]?.url} alt={park?.park?.images[0]?.alt_text} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{park?.park?.full_name}</p>
                            <p className="subtitle is-6">{park?.park?.state}</p>
                            <p className="subtitle is-6">{park?.date}</p>

                        </div>
                    </div>

                    <div className="content">
                        {park.visited == false ?
                            <button className="button" onClick={(evt) => {
                                evt.preventDefault()
                                setActive(true)
                                setCurrentPark(park.park.id)
                                loadParks()
                                notifyVisitedListAdd()
                            }} >Log Visit</button>
                            :
                            <>
                                <button className="button" onClick={(evt) => {
                                    evt.preventDefault()
                                    setActive(true)
                                    setCurrentPark(park.park.id)
                                    

                                }}>Add Another Visit</button>
                                <button className="button" onClick={(evt) => {
                                    evt.preventDefault()
                                    setActiveRemoveModal(true)
                                    setCurrentParkVisit(park.id)


                                }}>Remove Visit</button>
                            </>


                        }


                        <Link to={`/parks/${park.park.id}`} >
                            <button className="button ">Information</button>
                        </Link>

                    </div>
                </div>
            </div>
        })
        }
        {/* MODAL FOR ADD VISIT */}
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
                            addToVisitedList(currentPark, { date: date }).then(() => {
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
        {/* MODAL FOR REMOVE FROM Visited LIST */}
        <div className={`modal ${activeRemoveModal ? "is-active" : ""}`} >
            <div className="modal-background"></div>
            <div className="modal-content">
                <div>Remove Visit ?</div>
                <button className='button' onClick={(evt) => {
                    evt.preventDefault()
                    removeVisit(currentParkVisit).then(() => {
                        setActiveRemoveModal(false)
                        loadParks()
                        notifyVisitedRemoved()
                       
                    }
                    )
                   


                }} >Remove</button>
                <button className="button" onClick={(evt) => {
                    evt.preventDefault()
                    setActiveRemoveModal(false)
                }} >Cancel</button>
            </div>

        </div>
    </section>
}




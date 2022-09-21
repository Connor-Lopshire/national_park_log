// this will pull props from DetailsContainer

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addParkReview, addToBucketList, addToVisitedList, removeBucketList } from "../managers/ParkManager"

// will render park info full_name description designation addresses and url for nps site
export const ParkDetails = ({ addresses, url, full_name, description, designation, park_id, in_bucket, visited, loadPark }) => {
    const [date, setDate] = useState()
    const [active, setActive] = useState(false)
    const [activeRemoveModal, setActiveRemoveModal] = useState(false)
    const [activeReviewModal, setActiveReviewModal] = useState(false)
    const [review, setReview] = useState()
    const navigate = useNavigate()

    return <section>

        <div className="card">


            <div className="title is-4">{full_name}</div>
            <div className="subtitle is-6">{addresses[0]?.city} {addresses[0]?.state_code}</div>


            <div className="content">{description}</div>
            <div>{designation}</div>
            <div className='content'>{url}</div>
        </div>
        <div className="content">
            {visited == false ?
                <button className="button" onClick={(evt) => {
                    evt.preventDefault()
                    setActive(true)
                }} >Log Visit</button>
                : <>
                    <button className="button" onClick={(evt) => {
                        evt.preventDefault()
                        setActive(true)

                    }}>Add Another Visit</button>
                    <button className="button" onClick={(evt) => {
                        evt.preventDefault()
                        setActiveReviewModal(true)

                    }}>Add Review</button>
                </>


            }

            {in_bucket == false ?

                <button className="button " onClick={(evt) => {
                    evt.preventDefault()
                    addToBucketList(park_id)
                    loadPark()
                }}> Add Bucket List</button> :
                <button className="button " onClick={(evt) => {
                    evt.preventDefault()
                    setActiveRemoveModal(true)

                }}>Remove Bucket List</button>
            }



        </div>


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
                            addToVisitedList(park_id, { date: date }).then((res) => {
                                setActive(false)
                                loadPark()
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
                    removeBucketList(park_id).then(() => {
                        setActiveRemoveModal(false)
                        loadPark()
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
                            addParkReview(park_id, { content: review }).then(() => {
                                setActiveReviewModal(false)
                               loadPark()
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



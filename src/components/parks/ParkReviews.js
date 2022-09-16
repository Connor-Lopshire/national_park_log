// this component will pull in props from DetailsContainer

import { useState } from "react"
import { addParkReview, deleteParkReview, editParkReview } from "../managers/ParkManager"

//   render park.review.content review.user.username and if current user.id = review.user_id render edit and delete buttons
export const ParkReview = ({ reviews, visited, park }) => {
    const [review, setReview] = useState()
    const [active, setActive] = useState(false)
    const [activeDeleteModal, setActiveDeleteModal] = useState(false)
    const [currentReview, setCurrentReview] = useState()
    const [activeReviewModal, setActiveReviewModal] = useState(false)

    const user = localStorage

    return <div>
        <h3>Reviews</h3>

        {visited == true ?
            <button onClick={(evt) => {
                evt.preventDefault()
                setActive(true)
            }}>Leave Review</button> :
            ""
        }
        {
            reviews.map(review => {
                return <div>
                    <div>{review?.content}</div>
                    <div>{review?.user?.username}</div>

                    {review.author == true ?
                        <div>
                            <button onClick={(evt) => {
                                evt.preventDefault()
                                setActiveReviewModal(true)
                                setCurrentReview(review.id)
                            }}>Edit </button>
                            <button onClick={(evt) => {
                                evt.preventDefault()
                                setActiveDeleteModal(true)
                                setCurrentReview(review.id)
                            }}> Delete</button>

                        </div> :
                        ""
                    }


                </div>
            })

        }
        {/* MODAL FOR ADDING AND EDITING REVIEW */}
        <div className={`modal ${active ? "is-active" : ""}`} >
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
                            return addParkReview(park, { content: review }).then(setActive(false))
                        }}>submit</button>
                        <button className="button" onClick={(evt) => {
                            evt.preventDefault()
                            setActive(false)
                        }} >Cancel</button>
                    </div>
                </form>

            </div>

        </div>
        {/* MODAL FOR DELETE */}
        <div className={`modal ${activeDeleteModal ? "is-active" : ""}`} >
            <div className="modal-background"></div>
            <div className="modal-content">
                <div>Delete Comment ?</div>
                <button className='button' onClick={(evt) => {
                    evt.preventDefault()
                    return deleteParkReview(currentReview).then(setActiveDeleteModal(false))
                }} >Delete</button>
                <button className="button" onClick={(evt) => {
                    evt.preventDefault()
                    setActiveDeleteModal(false)
                }} >Cancel</button>
            </div>

        </div>
        {/* MODAL FOR EDIT REVIEW */}
        <div className={`modal ${activeReviewModal ? "is-active" : ""}`} >
            <div className="modal-background"></div>
            <div className="modal-content">
                <form>
                    <div className="field mt-6">
                        <label className="label"> Edit Review:</label>
                        <div className="control">
                            <input
                                required autoFocus
                                type="text"
                                step="any"
                                className="input is-rounded"
                                placeholder={review}
                                value={review}
                                onChange={
                                    (evt) => {

                                        setReview(evt.target.value)


                                    }} />
                        </div>
                        <button className='button' onClick={(evt) => {
                            evt.preventDefault()
                            return editParkReview(currentReview, { content: review } ).then(setActiveReviewModal(false))
                        }}>submit</button>
                        <button className="button" onClick={(evt) => {
                            evt.preventDefault()
                            setActiveReviewModal(false)
                        }} >Cancel</button>
                    </div>
                </form>

            </div>

        </div>
    </div>
}
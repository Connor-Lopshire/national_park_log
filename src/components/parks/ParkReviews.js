// this component will pull in props from DetailsContainer

import { useState } from "react"
import { addParkReview, deleteParkReview, editParkReview } from "../managers/ParkManager"

//   render park.review.content review.user.username and if current user.id = review.user_id render edit and delete buttons
export const ParkReview = ({ reviews, visited, park, loadPark }) => {
    const [review, setReview] = useState()
    const [active, setActive] = useState(false)
    const [activeDeleteModal, setActiveDeleteModal] = useState(false)
    const [currentReview, setCurrentReview] = useState()
    const [activeReviewModal, setActiveReviewModal] = useState(false)

    const user = localStorage

    return <div className="section">
        <h3 className="is title">Reviews</h3>


        {
            reviews.map(review => {
                return <div className="mt-3" >
                    <div className="subtitle    ">{review?.content}</div>
                    <div className="subtitle">{review?.user?.username}</div>

                    {review.author == true ?
                        <div>
                            <button className="button" onClick={(evt) => {
                                evt.preventDefault()
                                setActiveReviewModal(true)
                                setCurrentReview(review.id)
                                setReview(review.content)

                            }}>Edit </button>
                            <button className="button" onClick={(evt) => {
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
        {/* MODAL FOR ADDING Review  */}
        <div className={`modal ${active ? "is-active" : ""}`} >
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
                            return addParkReview(park, { content: review }).then(setActive(false)).then(loadPark())
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
                <div className="has-text-white">Delete Review ?</div>
                <button className='button' onClick={(evt) => {
                    evt.preventDefault()
                    return deleteParkReview(currentReview).then(setActiveDeleteModal(false)).then(loadPark())
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
                            return editParkReview(currentReview, { content: review } ).then(setActiveReviewModal(false)).then(loadPark())
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
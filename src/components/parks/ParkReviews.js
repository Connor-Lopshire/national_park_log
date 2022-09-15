// this component will pull in props from DetailsContainer
//   render park.review.content review.user.username and if current user.id = review.user_id render edit and delete buttons
export const ParkReview = ({reviews, visited}) => {
    return <div>
        <h3>Reviews</h3>

    {
        reviews.map(review => {
            return <div>
                { visited = true ?
                    <button>Leave Review</button>:
                <></>

                }
                <div>{review?.content}</div>
                <div>{review?.user?.username}</div>

            </div>
        })
        
    }
    
    </div>
}
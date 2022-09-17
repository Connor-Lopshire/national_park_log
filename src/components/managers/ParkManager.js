export const getAllParks = () => {
    return fetch("http://localhost:8000/parks", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}
export const getBucketListParks = () => {
    return fetch("http://localhost:8000/parks/bucket_list_parks", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const getVisitedParks = () => {
    return fetch("http://localhost:8000/parks/visited_parks", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}
export const getParkDetails = (park_id) => {
    return fetch(`http://localhost:8000/parks/${park_id}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}
export const addToBucketList = (park_id) => {
    return fetch(`http://localhost:8000/parks/${park_id}/add_bucket_list`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
}
export const addToVisitedList = (park_id, date) => {
    return fetch(`http://localhost:8000/parks/${park_id}/add_park_visit`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(date)

    })
        .then(res => res.json())
}
export const addParkReview = (park_id, content) => {
    return fetch(`http://localhost:8000/reviews/${park_id}/add_review`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content)

    })
        .then(res => res.json())
}
export const deleteParkReview = (review_id) => {
    
    return fetch(`http://localhost:8000/reviews/${review_id}/delete_review`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        }
    })

}
export const editParkReview = (park_id, content) => {
    return fetch(`http://localhost:8000/reviews/${park_id}/edit_review`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content)

    })
        .then(res => res.json())
}
export const removeBucketList = (park_id) => {
    
    return fetch(`http://localhost:8000/parks/${park_id}/remove_bucket_list`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json"
        }
    }) 
}

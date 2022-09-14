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
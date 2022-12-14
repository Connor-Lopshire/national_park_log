// need unpackage route param park_id
// this component will pull in park info from /parks/park_id
// will render ParkImageCarousel ParkReviews and ParkDetails 

import { ParkDetails } from "./ParkDetails"
import { ParkImageCarousel } from "./ParkImageCarousel"
import { ParkReview } from "./ParkReviews"
import { useEffect, useState } from "react"
import { getParkDetails } from "../managers/ParkManager"
import { useParams } from "react-router-dom"

//  will pass down the pieces of park data to each component according to what that component needs as props 
export const ParkDetailsContainer = () => {
    const [park, setPark] = useState({
    images:[],
    reviews:[],
    addresses:[]})
    const {park_id} = useParams()
    const loadPark = () => getParkDetails(parseInt(park_id)).then(data => setPark(data))
    useEffect(() => {
        loadPark()
    }, [])

    return <div className="">
    <ParkImageCarousel  images={park?.images} />
    <ParkDetails park_id={park.id} addresses={park?.addresses} url={park?.url} full_name={park?.full_name} description={park?.description} designation={park.designation} in_bucket={park.in_bucket} visited={park.visited} loadPark={loadPark}/>
    <ParkReview reviews={park?.reviews} visited={park?.visited} park={park.id} loadPark={loadPark}/>



    </div>
}
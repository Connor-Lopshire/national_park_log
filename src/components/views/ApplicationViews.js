import { Route, Routes } from "react-router-dom"
import { BucketList } from "../parks/BucketList"
import { ParkDetailsContainer } from "../parks/ParkDetailsContainer"
import { ParkImageCarousel } from "../parks/ParkImageCarousel"
import { ParkList } from "../parks/ParkList"
import { VisitedParks } from "../parks/VisitedParks"
export const ApplicationViews = ({ token, setToken, setUserId, userId, setStaffBool }) => {
    
    return <Routes>
      <Route path="/parks" element={<ParkList/>} />
      <Route path="/bucket_list" element={<BucketList/>} />
      <Route path="/visited_parks" element={<VisitedParks/>} />
      <Route path="/parks/:park_id" element={<ParkDetailsContainer/>} />

      <Route path="/carousel" element={<ParkImageCarousel/>} />

    
  </Routes>
}
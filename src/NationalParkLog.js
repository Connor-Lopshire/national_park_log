import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
// import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/views/ApplicationViews"
import { Authorized } from "./components/views/Authorized"

export const NationalParkLog = () => {
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))
    const [userId, setUserIdState] = useState(localStorage.getItem('user_id'))
    const [staffBool, setStaffBool] = useState(localStorage.getItem('is_staff'))

    const setToken = (newToken) => {
        localStorage.setItem('auth_token', newToken)
        setTokenState(newToken)
    }

    const setUserId = (userId) => {
        localStorage.setItem('user_id', userId)
        setUserIdState(userId)
    }

    const setIsStaff = (isStaffBoolean) => {
        localStorage.setItem('is_staff', isStaffBoolean)
        setStaffBool(isStaffBoolean)
    }
    return <Routes>
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} setStaffBool={setIsStaff} />} />
        <Route path="/register" element={<Register setToken={setToken} setUserId={setUserId} setStaffBool={setIsStaff}  />} />

        <Route path="*" element={
            <Authorized>
                <>
                    {/* <NavBar/> */}
                    <ApplicationViews />
                </>
            </Authorized>

        } />
    </Routes>
}
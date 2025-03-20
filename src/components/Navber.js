import React, { useState,useContext ,useEffect} from "react";
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'
import { Navigate,useNavigate } from "react-router-dom";


export const MyNavbar = () => {
    const navigate = useNavigate()
    const [openmodal, setOpenmodal] = useState(false)
    const handleOpen = () => {
        navigate('/add')
    }    

    return (

        <nav class="navbar mynavbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand mb-2 h2" href="#">Places</a>
            <button class="btn btn-sm btn-outline-secondary float-right" type="button" onClick={handleOpen}>add new place</button>

            
        </nav>



    )
}

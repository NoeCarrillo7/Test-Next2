"use client"
import { useState } from "react"
import Login from "./Login";

const IndexPage =()=>{
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = ()=>{
        setShowLogin(true);
    }
    const handleRegiterClick = ()=>{
        setShowRegister(true);
    }
    const handleCloseLogin = ()=>{
        setShowLogin(false);
    }


    return(
        <div>
            <button onClick={handleLoginClick}>Iniciar sesion</button>
            <br />
            <button onClick={handleRegiterClick}>Registro</button>
            {showLogin && <Login onClose={handleCloseLogin}/>}
        </div>
    )
}

export default IndexPage

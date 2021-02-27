import Logo from "./../img/logo.svg"

import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <>
         <section className="welcome">
             <div className="container welcome-container">
                <h1 className="welcome-title">Welcome to our store</h1>
                <p className="welcome-subtitle">Ger your groceries in as fast as one hour</p>
                <img className="welcome-logo" src={Logo} alt="Logo of grocery" width="120" height="auot" />
                <Link className="btn welcome-btn" to="/home" >Get Started</Link>
             </div>
         </section>
        </>
    )
}

export default Welcome
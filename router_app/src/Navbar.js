// import {Link} from "react-router-dom"
// import "./Navbar.css"

// export function Navbar(){

//     return(
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//         </nav>
//     )
// }


import {Link} from "react-router-dom"
import "./Navbar.css"
export function Navbar(){

    return(
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/vision">Vision</Link>
            <Link to="/service">Services</Link>
        </nav>
    )
}
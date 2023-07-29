import { NavLink } from "react-router-dom";

import orange from "./images/orange.jpeg";

function Orange() {
    return (
        <div>
            <img src={orange} width="200"  />
            <p> <NavLink to = '/'> Back </NavLink></p> 
            
        </div>
    )
}

export default Orange;
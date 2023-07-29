import { NavLink } from "react-router-dom";
import apple from "./images/apple.jpg";


function Apple() {

    return (
        <div>
            <img src={apple} width="200" />
            <p><NavLink  to="/">Back</NavLink></p>
        </div>
    )
}

export default Apple
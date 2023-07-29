
import { NavLink } from "react-router-dom";
import cookie from "./images/cookie.jpg";


function Cookie() {

    return (
        <div>
            <img src={cookie} width="200"  />
            <p><NavLink to="/">Back</NavLink></p>
        </div>
    )
}

export default Cookie



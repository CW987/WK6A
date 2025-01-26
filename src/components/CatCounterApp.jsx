import { useState, useEffect } from "react";
import CookieButton from "./CookieButton";

function CatCounterApp() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <CookieButton />
            {/* <h4>There are {count} stray cats at the back door</h4> */}
            {/* ABOVE LINE needs to work so can split the function and have the count show here outside of it */}
        </div>
    )
}

export default CatCounterApp
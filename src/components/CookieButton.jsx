import { useState } from "react";


function CookieButton() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                Call your cat
            </button>
            <button onClick={() => setCount((count) => count - 1)}>
                SHOOO!
            </button>
        <h4>There are {count} stray cats at the back door</h4>
        </div>
    )
}

export default CookieButton;

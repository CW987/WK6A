import { useState } from "react";

function CookieButton() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
          There are {count} stray cats at the back door
        </button>
        </div>
    )
}

export default CookieButton;

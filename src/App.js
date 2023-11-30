import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>This is the App</h1>
            <button onClick={handleClick}>Click me!</button>
            <div>The number of clicks is { count }</div>
        </div>
    )
}

export default App;
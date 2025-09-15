import { useRef } from 'react';
import React, {useState} from "react";
import './Counter.css';

function Counter () {

    const [count, setCount] = useState(0);
    const intervalRef = useRef(null); 

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const incrementAfterDelay = () => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }

    const automaticCounter = () => {
        if (intervalRef.current) return;
        intervalRef.current =
            setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1); 
    
    }

    const stopCounter = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    return (
        <div className="counter" style={{textAlign: "center", border: "2px solid black", borderRadius: "10px"}}>
            <h1>Counter App</h1>
            <div className="count" style={{fontSize: "60px", color: "black"}}>{count} </div>

            <button onClick={increment} style={{margin: "50px", border: "2px solid black", borderRadius: "10px", width: "200px", height: "100px", fontSize: "25px" }}>Increment</button>
            <button onClick={decrement} style={{margin: "50px", border: "2px solid black", borderRadius: "10px", width: "200px", height: "100px", fontSize: "25px" }}>Decrement</button>
            <button onClick={reset} style={{margin: "50px", border: "2px solid black", borderRadius: "10px", width: "200px", height: "100px", fontSize: "25px" }}>Reset</button>
            <button onClick={incrementAfterDelay} style={{margin: "50px", border: "2px solid black", borderRadius: "10px", width: "200px", height: "100px", fontSize: "25px" }}>Increment after 1 second</button>
        
            <button onClick={automaticCounter} style={{margin: "50px", border: "2px solid black", borderRadius: "10px", width: "200px", height: "100px", fontSize: "25px" }}>Automatic Counter</button>
        
            <button onClick={stopCounter} style={{margin: "50px", border: "2px solid black", borderRadius: "10px", width: "200px", height: "100px", fontSize: "25px" }}>Stop Automatic Counter</button>
        </div>
    )
}

export default Counter;
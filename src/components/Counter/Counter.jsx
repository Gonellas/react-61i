import './Counter.css';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCount = (operation) =>{
        switch(operation){
            case '-':
                setCount(count - 1);
                break;
            case 'reset':
                setCount(0);
                break;
            case '+':
                setCount(count + 1);
                break;            
        }
    }
    return ( 
        <>
        <p>{count}</p>
        <button onClick={() => handleCount('-')}>-1</button>
        <button onClick={() => handleCount('reset')}>Reset</button>
        <button onClick={() => handleCount('+')}>+1</button>
        </>
     );
}
 
export default Counter;
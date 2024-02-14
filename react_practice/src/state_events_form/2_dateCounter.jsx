import React, {useState, useEffect} from 'react'

export default function DateCounter(){
    const [date, setDate] = useState(new Date())
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        })
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        document.title = `Clicked ${count} times`
    }, [count])
    return(
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setCount(count-1)}>-1</button>
            <button onClick={() => setDate(new Date(date.getDate() + 1))}>Tap to edit the date</button>

            <p>Edited date: {date.getDate()}</p>
        </div>
    )
}
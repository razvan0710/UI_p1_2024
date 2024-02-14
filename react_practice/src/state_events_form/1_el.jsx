import React, {useState} from 'react'

const messages = [
    "What is your name?",
    "What is your email?",  
    "What is your password?",
]


export default function StateCourse(){
    let [step, setStep] = useState(1)
    const [openend, setOpened] = useState(false)
    return(
        <>
        <button onClick={()=>setOpened(!openend)}>
            {openend ? "Close" : "Open"}
        </button>
        {openend && <div className="steps">
            <div className="numbers">
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
                <h1>4</h1>
            </div>

            <p className="message">Step {step}: {messages[step-1]}</p>
            <div className="buttons">
                <button style={{backgroundColor:"#7950f2", color:"#fff"}}
                onClick={()=>{
                    if (step>1)
                    setStep(step-1)
                }}>
                    Previous</button>
                <button style={{backgroundColor:"#7950f2", color:"#fff"}}
                onClick={()=>{
                    if (step<3)
                    setStep(step+1)
                }}>
                    Next</button>
            </div>
        </div>}
        </>
    )
}
export default function StartScreen({numQuestions, dispatch}){
    return(
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h4>{numQuestions} questions to test you knowledge</h4>
            <button className="btn btn-ui" onClick={()=> dispatch({type: 'start'})}>Let's start</button>
        </div>
    )
}
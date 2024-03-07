import { useState, useEffect, useRef } from "react"
import StarRating from "./StarRating"

export default function ItemsList({isOpen1, setIsOpen1, movies}){
    const[popup, setPopup] = useState(false)
    const dialogRef = useRef(null);
    useEffect(() => {
        if (popup && dialogRef.current) {
          dialogRef.current.showModal();
        }
      }, [popup]);

    return(
        <>
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie) => (
                <li className="clickable" key={movie.imdbID} onClick={()=>setPopup((popup)=>!popup)}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {console.log(popup)}
        </div>
        {popup && (<StarRating 
                     dialogRef={dialogRef} 
                     popup={popup} 
                     setPopup={setPopup}
                     messages={['q','w','e','r','t','y','u','i','o','p']}/>)}
        </>
    )
}
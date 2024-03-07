import { useEffect, useRef } from "react"

export default function NavBar({query, setQuery, movies}){
    return(
        <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <Search query={query} setQuery={setQuery}/>
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    )
}

function Search({query, setQuery}){
  const inputEl = useRef(null)
  useEffect(function(){
    function callback(e){
      if(e.code === "Enter"){
        inputEl.current.focus()
        
      }
    }
    document.addEventListener('keydown', callback)
  },[])

    return(
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputEl}
        />
    )
}
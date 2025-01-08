
import React from 'react';
function App () {
  let sports = ['Soccer', 'Basketball', 'Tennis', 'Swimming', 'Cycling'];

  return(
    <>
    <h1>My games</h1>
    <ul>
      {sports.map((sport, i) => {
        return <li key={i}>{sport}</li>
      })}
    </ul>
    </>
  )
}

export default App;
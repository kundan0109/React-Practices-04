


const ArrowMapEven = () => {
  let sports = ["Soccer", "Basketball", "Tennis", "Swimming", "Cycling"];


  return(
    <>
    <h1>Arrow function  </h1>
    <ol>
      {sports.map((sport, i) => {
        return <li key={i}>{sport}</li>
      })}
    </ol>
    </>
  )
};


export default ArrowMapEven;
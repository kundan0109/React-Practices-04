import React, { useState, useEffect } from "react";

//  Fetching Data with useEffect
const UseEffect01 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error in fetching data ", error));
  }, []);
};

if (loading === true) {
  return <h1>Loading...</h1>;
}

return (
  <>
    <div>Data: {JSON.stringify(data)}</div>;
  </>
);
export default UseEffect01;



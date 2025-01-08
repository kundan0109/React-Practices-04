import React from "react";

const ArrowFilterEven = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <h1>Even Numbers</h1>
      <ul>
        {numbers
          .filter((number) => number % 2 === 0)
          .map((number, index) => (
            <li key={index}>{number}</li>
          ))}
      </ul>
    </div>
  );
};

export default ArrowFilterEven;

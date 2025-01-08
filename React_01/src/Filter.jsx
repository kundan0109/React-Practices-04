function Filter() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h2>This is FIlter Function</h2>

      <h3>Even Numbers</h3>
      <ul>
        {number
          .filter((n) => n % 2 === 0)
          .map((evenNumbers) => (
            <li key={evenNumbers}>{evenNumbers}</li>
          ))}
      </ul>
    </>
  );
}

export default Filter;

import React from 'react';

function GuessInput({ handleAddGuess }) {
  // Control input value
  const [tryGuess, setTryGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Reset input value
    setTryGuess('');
    // Add input value to the list of guesses
    handleAddGuess(tryGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        minLength={5}
        maxLength={5}
        pattern="\w{5,5}"
        value={tryGuess}
        onChange={(event) => {
          setTryGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;

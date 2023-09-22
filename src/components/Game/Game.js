import React from 'react';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';

import { WORDS } from '../../data';
import { sample } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(tryGuess) {
    setGuesses([...guesses, tryGuess]);
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;

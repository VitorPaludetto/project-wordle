import React from 'react';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(tryGuess) {
    const nextGuesses = [...guesses, tryGuess];
    setGuesses(nextGuesses);

    if (tryGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} handleAddGuess={handleAddGuess} />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;

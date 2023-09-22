import React from 'react';

import { range } from '../../utils';
import Guess from '../Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess
          key={index}
          guess={guesses[index]}
          answer={answer}
          guessIndex={index}
        />
      ))}
    </div>
  );
}

export default GuessResult;

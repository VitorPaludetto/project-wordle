import React from 'react';
import { range } from '../../utils';

import { checkGuess } from '../../game-helpers';

function Guess({ guess = '', answer }) {
  function classNameResult(index) {
    if (guess === '') {
      return 'cell';
    }
    const checkResult = checkGuess(guess, answer);
    return `cell ${Object.values(checkResult).at(index).status}`;
  }

  return (
    <>
      <p className="guess">
        {range(5).map((index) => {
          const classes = classNameResult(index);
          return (
            <span key={index} className={classes}>
              {guess[index]}
            </span>
          );
        })}
      </p>
    </>
  );
}

export default Guess;

import React, { useState, useEffect } from 'react';

export default ({ words, inp, timeElapsed, setTimeStarted }) => {
  useEffect(() => {
    setTimeStarted(false);
  }, [words === inp]);

  const score = words.split('').reduce((acc, cur, index) => {
    if (cur === inp[index]) {
      return acc + 1;
    }

    return acc;
  }, 0);

  const renderScore = () => {
    return (score / timeElapsed) * 100;
  };

  return (
    <h4 className="text-center">
      {words === inp ? (
        <div>You did it! Your final score: {renderScore()}</div>
      ) : (
        <div>
          Correct: {score} Time: {timeElapsed}
        </div>
      )}
    </h4>
  );
};

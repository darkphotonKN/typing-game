import React, { FunctionComponent, useState, useEffect } from 'react';

const TotalScore: FunctionComponent<{
  words: string;
  inp: string;
  timeElapsed: number;
  setTimeStarted: (time: boolean) => void;
}> = ({ words, inp, timeElapsed, setTimeStarted }) => {
  useEffect(() => {
    setTimeStarted(false);
  }, [words === inp]);

  const score = words.split('').reduce((acc, cur, index) => {
    if (cur === inp[index]) {
      return acc + 1;
    }

    return acc;
  }, 0);

  const renderScore: () => number = () => {
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

export default TotalScore;

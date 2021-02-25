import React, { useState, useEffect } from 'react';

import TypeBar from './components/TypeBar';
import TypeText from './components/TypeText';
import TotalScore from './components/TotalScore';

const App = () => {
  const [words, setWords] = useState('This is a test of what the fox says.');
  const [inp, setInp] = useState('');

  const [timerStarted, setTimerStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (timerStarted || inp.length === 0) {
      return;
    } else {
      setTimerStarted(true);
    }
  }, [inp]);

  useEffect(() => {
    let intervalId;
    if (timerStarted) {
      intervalId = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      console.log('clearing interval...');
      clearInterval(intervalId);
    }
  }, [timerStarted]);

  console.log(timeElapsed);

  return (
    <div className="app container">
      <h3 className="mt-4">Typing Game</h3>
      <TotalScore
        words={words}
        inp={inp}
        timeElapsed={timeElapsed}
        setTimeStarted={setTimerStarted}
      />
      <TypeText words={words} inp={inp} />
      <TypeBar inp={inp} setInp={setInp} />
    </div>
  );
};

export default App;

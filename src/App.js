import React, { useState, useEffect } from 'react';

import TypeBar from './components/TypeBar';
import TypeText from './components/TypeText';
import TotalScore from './components/TotalScore';

const App = () => {
  const [words, setWords] = useState('This is a test of what the fox says.');
  const [inp, setInp] = useState('');

  const [timerStarted, setTimerStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const [id, setId] = useState('');

  useEffect(() => {
    if (timerStarted || inp.length === 0) {
      return;
    } else {
      console.log('Timer started');
      setTimerStarted(true);
    }
  }, [inp]);

  let intervalId;
  useEffect(() => {
    if (timerStarted) {
      intervalId = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);

      setId(intervalId);
    } else {
      clearInterval(id);
      console.log('Timer stopped...');
    }
  }, [timerStarted]);

  console.log(timeElapsed);
  console.log('timerStarted:', timerStarted);

  return (
    <div className="app container">
      <button onClick={() => clearInterval(id)}>STOP!</button>
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

import React, { FunctionComponent } from 'react';

const TypeText: FunctionComponent<{ words: string; inp: string }> = ({
  words,
  inp,
}) => (
  <div className="row mt-5">
    <div className="col-md-6 offset-md-3 col-12">
      {words.split('').map((char, index) => (
        <span
          style={
            inp.length === index
              ? { color: 'navy' }
              : inp[index] === char
              ? { color: 'darkgreen' }
              : { color: 'maroon' }
          }
        >
          {char}
        </span>
      ))}
    </div>
  </div>
);

export default TypeText;

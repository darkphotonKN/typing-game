import React, { FunctionComponent } from 'react';

const TypeBar: FunctionComponent<{
  inp: string;
  setInp: (input: string) => void;
}> = ({ inp, setInp }) => (
  <div className="row mt-5">
    <div className="col-md-6 offset-md-3 col-12">
      <div className="text font-primary my-2">Start typing to begin game!</div>
      <input
        type="text"
        className="form-control"
        name="typingInp"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
    </div>
  </div>
);

export default TypeBar;

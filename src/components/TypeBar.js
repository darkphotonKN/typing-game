import React from 'react';

export default ({ inp, setInp }) => (
  <div className="row mt-5">
    <div className="col-md-6 offset-md-3 col-12">
      <div className="text font-primary my-2">Start Typing</div>
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

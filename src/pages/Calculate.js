import React from 'react';
import Calculator from '../components/Calculator';

const Calculate = () => (
  <>
    <div className="wrapper">
      <div key="Calculator">
        <h2 key="math-text" className="math-text">Let us do some Math!!</h2>
        <Calculator key="math" />
      </div>
    </div>
  </>
);

export default Calculate;

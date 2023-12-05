// ErrorComponent.js
import React from 'react';

const ErrorComponent = () => {
  // Simulating an error by accessing an undefined variable
  const undefinedVariable = someUndefinedVariable;

  return (
    <div>
      <h3>This component may throw an error</h3>
    </div>
  );
};

export default ErrorComponent;

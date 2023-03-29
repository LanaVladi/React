import React from 'react';
import './confirmation.css';

function Confirmation(): JSX.Element {
  return (
    <div className="confirmation-card">
      <p className="confirmation">
        <span style={{ fontWeight: 'bold' }}>Data has been saved!</span>
      </p>
    </div>
  );
}

export { Confirmation };

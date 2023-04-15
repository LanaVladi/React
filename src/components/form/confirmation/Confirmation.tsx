import React from 'react';
import './confirmation.css';

function Confirmation(): JSX.Element {
  return (
    <div className="confirmation-card">
      <h3 className="confirmation" style={{ fontWeight: 'bold' }}>
        Data has been saved!
      </h3>
    </div>
  );
}

export { Confirmation };

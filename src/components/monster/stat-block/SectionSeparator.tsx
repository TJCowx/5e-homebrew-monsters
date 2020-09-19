import React from 'react';

function SectionSeparator() {
  return (
    <>
      <svg
        width="450px"
        style={{ fill: '#99351f', stroke: '#99351f', height: '5px' }}
      >
        <polyline points="0,0 450,2.5 0,5" />
      </svg>
    </>
  );
}

export default SectionSeparator;

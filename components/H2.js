import React from 'react';

export default ({ children }) => (
  <div>
    <h2>{children}</h2>
    <style jsx>{`
      h2 {
        margin: 5px 0;
        text-align: center;
      }
      `}</style>
  </div>
);

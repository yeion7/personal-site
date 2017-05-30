import React from 'react';

export default ({ children }) => (
  <div>
    <h1>{children}</h1>
    <style jsx>{`
      h1 {
        margin: 5px 0;
      }
      `}</style>
  </div>
);

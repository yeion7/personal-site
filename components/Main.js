import React from 'react';

export default ({ children }) => (
  <main id="app">
    {children}
    <style jsx>{`
      main {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 600px;
        height: calc(100vh - 75px);
      }
      `}</style>
  </main>
);

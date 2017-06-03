import React from 'react';

import Icon from 'react-icons/lib/fa/external-link';

export default ({ name, description, url }) => (
  <div className="project">
    <h3>{name}</h3>
    <p>
      {description}
    </p>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon size={30} color="#aaa" />
    </a>
    <style jsx>{`
      .project {
        align-items: stretch;
        border: 1px solid #ccc;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        margin-right: 10px;
        padding: 30px 10px;
        height: 300px;
        width: 330px;
      }
      a {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 70px;
      }

      `}</style>
  </div>
);

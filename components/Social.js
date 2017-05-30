import React from 'react';
import Twitter from 'react-icons/lib/fa/twitter';
import Github from 'react-icons/lib/fa/github';
import Youtube from 'react-icons/lib/fa/youtube-play';
import Medium from 'react-icons/lib/fa/medium';

export default () => (
  <div>
    <a href="https://twitter.com/yeion7" target="_blank" rel="noopener noreferrer">
      <Twitter size={30} color="#aaa" />
    </a>
    <a href="https://github.com/yeion7/" target="_blank" rel="noopener noreferrer">
      <Github size={30} color="#aaa" />
    </a>
    <a href="https://www.youtube.com/user/yeison0327/" target="_blank" rel="noopener noreferrer">
      <Youtube size={30} color="#aaa" />
    </a>
    <a href="https://medium.com/@yeion7" target="_blank" rel="noopener noreferrer">
      <Medium size={30} color="#aaa" />
    </a>
    <style jsx>{`
      div {
        margin: 1em 0;
      }
      a {
        padding: 1em 0.8em;
      }
      a:hover {
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      `}</style>
  </div>
);

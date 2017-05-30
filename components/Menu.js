import Link from "next/link";
import React from "react";

export default ({ external, url, text }) => (
  <div>
    {external
      ? <a href={url} className="link" target="_blank" noopener noreferrer>
          {text}
        </a>
      : <Link href={url}><a className="link">{text}</a></Link>}
    <style jsx>{`
      .link {
        display: block;
        padding: 1em;
        width: 100%;
        text-align: center;
        cursor: pointer;
      }
      .link:hover {
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      @media screen and (min-width: 769px) {
        .link {
          border-bottom: none;
          width: auto;
        }
      }
      `}</style>
  </div>
);

import Link from "next/link";
import Header from "../components/Header";
import Twitter from "react-icons/lib/fa/twitter";
import Github from "react-icons/lib/fa/github";
import Youtube from "react-icons/lib/fa/youtube-play";
import Medium from "react-icons/lib/fa/medium";

export default () => (
  <div>
    <Header />
    <main id="app">
      <img src="/static/avatar.jpg" alt="Avatar" />
      <h1 className="nombre">Yeison Daza</h1>
      <h2 className="perfil">JavaScript Developer | Technical Writer</h2>
      <div className="social">
        <a href="https://twitter.com/yeion7" target="_blank" className="icon">
          <Twitter size={30} color="#aaa" />
        </a>
        <a href="https://github.com/yeion7/" target="_blank" className="icon">
          <Github size={30} color="#aaa" />
        </a>
        <a
          href="https://www.youtube.com/user/yeison0327/"
          target="_blank"
          className="icon"
        >
          <Youtube size={30} color="#aaa" />
        </a>
        <a href="https://medium.com/@yeion7" target="_blank" className="icon">
          <Medium size={30} color="#aaa" />
        </a>
      </div>
    </main>
    <style jsx>{`
      main {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 500px;
        height: calc(100vh - 75px);
      }

      img {
        border-radius: 50%;
        width: 140px;
      }

      .nombre {
        margin: 5px 0;
      }
      .perfil {
        margin: 5px 0;
        text-align: center;
      }
      .social {
        margin: 1em 0;
      }
      .ref {
        border-bottom: 1px solid #ccc;
      }
      .icon {
        padding: 1em 0.8em;
      }
      .icon:hover {
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      `}</style>
  </div>
);

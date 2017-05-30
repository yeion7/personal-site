import NProgress from "nprogress";
import Router from "next/router";
import Navitation from "./Navigation";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <header>
    <Navitation />
    <style jsx>{`
      header {
        width: 100%;
        height: 72px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
      }
      `}</style>
  </header>
);

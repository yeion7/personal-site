import Menu from "./Menu";
import { menus } from "../data.json";
import MenuIcon from "react-icons/lib/md/menu";

export default () => (
  <div>
    <div className="menu-responsive">
      <MenuIcon size={40} color="#aaa" id="menu" />
    </div>
    <nav>
      {menus.map(menu => <Menu key={menu.id} {...menu} />)}
    </nav>
    <style jsx>{`
    .menu-responsive {
      cursor: pointer;
    }
    @media screen and (min-width: 769px) {
      .menu-responsive {
        display: none;
      }
    }
    nav {
      position: absolute;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 72px;
      left: 0;
      background: #fff;
      width: 100%;
      transition: all 0.5s ease;
    }
    @media screen and (min-width: 769px) {
      nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        position: static;
        height: 72px;
        padding: 0 0.3em;
      }
    }
    `}</style>
  </div>
);

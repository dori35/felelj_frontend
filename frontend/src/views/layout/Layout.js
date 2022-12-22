import { Menu } from "../menu/Menu";
import "../css/layout/Layout.css";

export function Layout({ children }) {
  return (
    <>
      <div className="mainBg"></div>
      <div className="mainBg bg2"></div>
      <div className="mainBg bg3"></div>
      <Menu />
      {children}
    </>
  );
}

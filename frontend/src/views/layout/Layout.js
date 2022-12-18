import { Menu2 } from "../menu/Menu2";
import "./Layout.css";

export function Layout({ children }) {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Menu2 />
      {children}
    </>
  );
}

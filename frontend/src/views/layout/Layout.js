import { Footer } from "../footer/Footer";
import { Menu } from "../menu/Menu";

export function Layout({ children }) {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Menu />
      {children}
    </>
  );
}

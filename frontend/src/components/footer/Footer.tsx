import toTop from "../../images/go-to-top.png";

import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <a href="#" className="main-footer__to-top">
        <img src={toTop} alt="Ходить в верхъ страницы ↑" />
      </a>
      <div className="container">
        <FooterDesktop />
        <FooterMobile />
      </div>
      <p className="main-footer__copyright">2022-{currentYear} © Ezichestvo</p>
    </footer>
  );
};

export default Footer;

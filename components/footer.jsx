import Link from "next/link";
import footerLinks from "./data/footer-navlinks.json";
const Footer = () => (
  <footer>
    <hr />
    <p id="colophon">&copy; Shenendoah Thompson</p>
    <ul id="footer-navigation">
      {footerLinks.map(({ href, text }) => (
        <li key={href}>
          <Link href={href} passHref>
            <a>{text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);
export default Footer;

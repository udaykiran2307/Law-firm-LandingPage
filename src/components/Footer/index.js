/* eslint-disable import/no-anonymous-default-export */

import { NavIcon, NavItems } from "../Header/navbar";
import "../Header/navbar/navbar.css";
import './Footer.css'
const SocialItems = () => {
  return <div>Hello world</div>;
};

export default () => {
  return (
    <div className="footer">
      <div className="nav-items">
        <NavIcon />
        <NavItems />
        <SocialItems />
      </div>
      <div className='footer-end'>
        <div>© 2020 Acme. All right reserved.</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};

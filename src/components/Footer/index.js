/* eslint-disable import/no-anonymous-default-export */

import { NavIcon, NavItems } from "../Header/navbar";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import "../Header/navbar/navbar.css";
import "./Footer.css";
const SocialItems = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <FaInstagram className="footer-icon" />
      <FaFacebookSquare className="footer-icon" />
      <FaTwitterSquare className="footer-icon" />
      <FaPinterest className="footer-icon" />
    </div>
  );
};

export default () => {
  return (
    <div className="footer">
      <div className="nav-items">
        <NavIcon />
        <NavItems />
        <SocialItems />
      </div>
      <div className="footer-end">
        <div>© 2020 Acme. All right reserved.</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};

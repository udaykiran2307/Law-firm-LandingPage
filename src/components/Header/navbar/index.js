/* eslint-disable import/no-anonymous-default-export */
import "./navbar.css";

export const NavIcon = ({position}) => {
  return (
    <div className={position}>
      <img
        src="Vectorlaw-icon.png"
        alt="nav-icon"
        className="nav-icon-img"
      ></img>
      <h3>IGSTUDIO</h3>
    </div>
  );
};

export const NavItems = ({position}) =>{

  return(<div className={position}>
  <p className="item">Home</p>
  <p className="item">Attorneys</p>
  <p className="item">Practice Areas</p>
  <p className="item">About Us</p>
</div>);
}

export default () => {
  return (
    <div className="navbar">
      <NavIcon position={'nav-icon nav-head-icon'}/>
      <NavItems position={'nav-items nav-head'}/>
      <button className="nav-btn">Contact Now</button>
    </div>
  );
};

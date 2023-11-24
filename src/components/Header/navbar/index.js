/* eslint-disable import/no-anonymous-default-export */
import "./navbar.css";

export const NavIcon = () => {
  return (
    <div className="nav-icon">
      <img
        src="Vectorlaw-icon.png"
        alt="nav-icon"
        className="nav-icon-img"
      ></img>
      <h3>IGSTUDIO</h3>
    </div>
  );
};

export const NavItems = () =>{

  return(<div className="nav-items">
  <p className="item">Home</p>
  <p className="item">Attorneys</p>
  <p className="item">Practice Areas</p>
  <p className="item">About Us</p>
</div>);
}

export default () => {
  return (
    <div className="navbar">
      <NavIcon/>
      <NavItems/>
      <button className="nav-btn">Contact Now</button>
    </div>
  );
};

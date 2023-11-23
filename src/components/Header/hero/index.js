/* eslint-disable import/no-anonymous-default-export */
import "./Hero.css";
import CustomizedInputBase from "./searchBox";

export default () => {
  return (
    <div className="hero-intro">
      <div className="hero-intro-text">
        <h2 className="head-text">
          You don't have to{" "}
          <span style={{ fontWeight: "900px", fontSize:'30px' }}> Fight them Alone.</span>
        </h2>
        <p className="head-desc" style={{maxWidth:'39vw'}}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <CustomizedInputBase />
      </div>
      <div className="hero-intro-img">
        <img src="Group 10591.png" alt="hero-img" style={{width:'100%',height:'100%'}}></img>
      </div>
    </div>
  );
};

/* eslint-disable import/no-anonymous-default-export */

import { Card } from "./chooseCard";
import "./Card.css";

export default () => {
  return (
    <div>
      <h1 className="heading" style={{marginBottom:'3rem'}}>Why Choose us?</h1>
      <div style={{display:'flex',justifyContent:'center',gap:'2rem'}} className="choose-card-container">
        <Card cardText={'98'}/>
        <Card cardText={'100'} display={'#2E2E2E'} />
        <Card cardText={'100'} />
      </div>
    </div>
  );
};

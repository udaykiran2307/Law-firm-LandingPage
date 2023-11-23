/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
export const Card = ({cardText ,display}) => {
  return (
    <div className="card" style={{backgroundColor:display}}>
      <div className='card-img' style={{margin:'1rem'}}>
        <img src="Union.png" alt='union-icon' ></img>
      </div>
      <h3 style={{margin:'1rem'}}>{cardText}% Sucsess Rate</h3>
      <p style={{margin:'1rem'}}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className='card-btn' style={{marginLeft:'1rem'}}>Read More</button>
    </div>
  );
};



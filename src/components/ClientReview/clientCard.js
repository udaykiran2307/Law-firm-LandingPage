/* eslint-disable import/no-anonymous-default-export */
import './ClientReview.css'
export default ({image,name,company}) => {
  return (
    <div className="Card">
      <div className="clientCard-img">
        <img src={image} alt='img' className='cardImg'/>
      </div>
      <h3>{name}</h3>
      <h4 style={{marginBottom:'1rem'}}>CEO of {company}</h4>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

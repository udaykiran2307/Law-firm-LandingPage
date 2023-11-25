/* eslint-disable import/no-anonymous-default-export */

export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:'8rem',
        marginLeft:'8rem'
      }}
    >
      <h1 style={{maxWidth:'15rem'}}>Let's Introduce Ourself</h1>
      <div
        style={{
          height: "206px",
          border: "1px solid #434343",
          marginRight: "2rem",
          marginLeft:'2rem'
          
        }}
      ></div>
      <div style={{minWidth: "200px", maxHeight:'300px'}}>
        <h3>Criminal Lawyer</h3>
        <p style={{ color: "#616161", minWidth: "20vw", maxHeight:'300px', marginTop:'1rem'}}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

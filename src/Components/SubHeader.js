import React from "react";

function SubHeader() {
    const [d,setD]=React.useState(false)
    setTimeout(() => {
        setTimeout(() => {
        setD(true)
    }, 5000 );
    setD(false)
    }, 1000);
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <h1 style={{fontSize:'80px',color:d?"red":"blue"}}>The Great Portfolio</h1>
      <img
        src="https://unice.pixelstrapthemes.vercel.app/assets/images/portfolio/portfolio-new/man.png"
        width="150px"
        alt="sub"
      />
    </div>
  );
}

export default SubHeader;

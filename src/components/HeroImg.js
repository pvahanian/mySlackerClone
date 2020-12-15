import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import senderImg from '../images/senderimg.png'

const Img = withStyles({
  root: {
    backgroundColor: `#f2e5e4`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: "50%",
    height: "100vh"
  }
})(Box);

const HeroImg = () => {
return (
<Img>
<div className='images'>
  <img className='senderImage' src={senderImg} alt='texter' />
</div>
</Img>
)
}
export default HeroImg;


// import bgImg from "../images/logo1.png";
// import compImg from "../images/downloadicon8.png";
// import texter from "../images/texter.png";
// import confusedImg from "../images/lostguy.png";

  // {/* <img className='computerImage' src={compImg} alt='computer' /> */}
  // {/* <img className='texterImage' src={texter} alt='texter' />
  // <img className='confusedImage' src={confusedImg} alt='texter' /> */}
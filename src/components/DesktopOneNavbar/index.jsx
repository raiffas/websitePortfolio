import React from "react";

import { Img, Text } from "components";
import logo from './img_frame1.svg'

const DesktopOneNavbar = (props) => {


  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[69px] items-start justify-start w-auto">
          <button onClick={() => props.handleClick(0)} className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
              size="txtKirangHaerangRegular32"
              >{props?.homebuttontext}</button>
          <button onClick={() => props.handleClick(1)} className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
              size="txtKirangHaerangRegular32"
              
              >{props?.biobuttontext}</button>
          <button onClick={() => props.handleClick(2)} className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
              size="txtKirangHaerangRegular32">{props?.projectsbuttontext}</button>
        </div>
        <img src={logo} className="h-12 w-12"  alt="logo" />
       
      </div>
    </>
  );
};

DesktopOneNavbar.defaultProps = {
  homebuttontext: "Home",
  biobuttontext: "Bio",
  projectsbuttontext: "Projects",
};

export default DesktopOneNavbar;

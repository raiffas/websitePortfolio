import React from "react";
import {useRef, createRef} from 'react';
import { useState } from 'react';
import Headroom from "react-headroom";

import { Img, List, Text } from "components";
import DesktopOneNavbar from "components/DesktopOneNavbar";
import { DesktopFooter } from "components/DesktopFooter";
import { HomePage } from "components/HomePage";
import { BioPage } from "components/BioPage";
import { ProjectPage } from "components/ProjectPage";




const DesktopOnePage = () => {
  let pageRef = [useRef(null),useRef(null),useRef(null)];
  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth" });
  const scrollToPane = num => scrollToRef(pageRef[num]);
  function handleClick(index) {
    scrollToPane(index)
  }
 
  return (
    <>
      <div className="bg-black-900 flex flex-col font-kiranghaerang items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[9px] items-start justify-start w-auto md:w-full">
          <Headroom className="w-full">
            <header className="flex flex-col items-center justify-end md:px-5 py-12 w-full">
              <DesktopOneNavbar handleClick={handleClick} className="flex sm:flex-col flex-row md:gap-10 gap-40 items-center justify-end max-w-[1440px] md:px-10 sm:px-5 px-[180px] w-full" />
            </header>         
            </Headroom>
          <div className="flex flex-col font-jura h-[5716px] md:h-auto items-center justify-start max-w-[1440px] w-full">
            <HomePage pageRef={pageRef[0]} />
            <BioPage pageRef={pageRef[1]} />
            <ProjectPage pageRef={pageRef[2]} />
          </div>
          <DesktopFooter />
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;

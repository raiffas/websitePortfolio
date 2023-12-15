import React from "react";
import {useRef, createRef} from 'react';
import { useState } from 'react';
import Headroom from "react-headroom";

import { Img, List, Text } from "components";
import DesktopOneNavbar from "components/DesktopOneNavbar";

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
            
            <div key={"elemHome"} ref={pageRef[0]} className="h-[1024px] md:h-[862px] pb-[55px] md:px-5 px-[55px] relative w-full">
              <div className="absolute bottom-[21%] flex flex-col gap-2.5 h-[269px] md:h-auto inset-x-[0] items-start justify-start mx-auto w-auto">
                <div className="font-kiranghaerang md:h-[163px] h-[166px] relative w-full">
                  <Text
                    className="absolute h-max inset-y-[0] left-[0] my-auto md:text-5xl text-[130px] text-white-A700"
                    size="txtKirangHaerangRegular130"
                  >
                    Raiffa Syamil
                  </Text>
                  <div className="absolute bg-white-A700 bottom-[0] h-[13px] inset-x-[0] mx-auto w-full"></div>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtJuraRegular32"
                >
                  <>
                    email: raiffa.syamil [at] ucf.edu
                    <br />
                    Orlando, FL
                  </>
                </Text>
              </div>
              <Img
                className="absolute h-[862px] object-cover right-[5%] top-[0] w-[41%]"
                src="images/img_headshottransparent.png"
                alt="headshottranspa"
              />
            </div>
            
            <div key={"elemBio"} ref={pageRef[1]} className="flex flex-col items-start justify-center max-w-[1440px] w-full">
              <div className="flex flex-col h-[1024px] items-center justify-center max-w-[1440px] px-2.5 w-full">
                <div className="flex flex-col gap-[17px] h-[621px] md:h-auto items-center justify-center max-w-[877px] mx-auto md:px-5 w-full">
                  <Img
                    className="h-[283px] w-[283px]"
                    src="images/img_frame_red_a100.svg"
                    alt="frame_One"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                    size="txtJuraBold32"
                  >
                    <>
                      2016-2020
                      <br />
                      BS in Computer Science @ the University of Kentucky
                      <br />+ minor in math
                    </>
                  </Text>
                  <Text
                    className="max-w-[545px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtJuraRegular24"
                  >
                    <span className="text-white-A700 font-jura text-left font-normal">
                      I found time to do everything I wanted. I found a passion
                      for
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      {" "}
                      leadership{" "}
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      and{" "}
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      management
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      , found what I loved and what I couldn’t stand to do
                      anymore and ended up with a lot to show for.
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      {" "}
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col h-[1024px] items-center justify-center max-w-[1440px] px-2.5 w-full">
                <div className="flex flex-col gap-[17px] items-center justify-center max-w-[1058px] mx-auto md:px-5 w-full">
                  <Img
                    className="h-[283px] w-[283px]"
                    src="images/img_frame_red_a100.svg"
                    alt="frame_Two"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                    size="txtJuraBold32"
                  >
                    <>
                      2020-2024
                      <br />
                      Masters in Computer Science @ the University of Central
                      Florida
                    </>
                  </Text>
                  <Text
                    className="max-w-[545px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtJuraRegular24"
                  >
                    <span className="text-white-A700 font-jura text-left font-normal">
                      <>
                        Getting my masters was important to focus <br />
                        my skill set and create a portfolio of projects related
                        to{" "}
                      </>
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      immersive technology
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      ,{" "}
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      creative industries
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      , and{" "}
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      user experience research
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      .
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col h-[1024px] items-center justify-center max-w-[1440px] px-2.5 w-full">
                <div className="flex flex-col gap-[17px] items-center justify-center max-w-[990px] mx-auto md:px-5 w-full">
                  <Img
                    className="h-[283px] w-[283px]"
                    src="images/img_frame_red_a100.svg"
                    alt="frame_Three"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                    size="txtKirangHaerangRegular32"
                  >
                    <span className="text-white-A700 font-kiranghaerang font-normal">
                      <>
                        2020-2026
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-jura font-bold">
                      PhD in Computer Science @ the University of Central
                      Florida
                    </span>
                  </Text>
                  <Text
                    className="max-w-[545px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtJuraRegular24"
                  >
                    <span className="text-white-A700 font-jura text-left font-normal">
                      <>
                        With Dr. Carolina Cruz-Neira as my advisor, I <br />
                        am embarking on the journey to create a new space for{" "}
                      </>
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      filmmakers
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      {" "}
                      within{" "}
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      Virtual Reality
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      .
                    </span>
                  </Text>
                </div>
              </div>
            </div>

            <div key={"elemProj"} ref={pageRef[2]} className="flex flex-col md:gap-10 gap-[100px] h-[2000px] md:h-auto items-start justify-start max-w-[1440px] w-full">
              <div className="flex flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                  size="txtJuraRegular32"
                >
                  Research
                </Text>
                <div className="flex flex-col gap-[47px] h-[750px] md:h-auto items-start justify-start max-w-[1440px] w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="max-w-[710px] md:max-w-full text-base text-right text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      paper in review
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Systematic literature of 360-degree video application
                      areas
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base text-right text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      paper in review
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      <span className="text-white-A700 font-jura text-left font-normal">
                        <>
                          Physical locomotion techniques and presence in virtual
                          reality
                          <br />
                          Responsible for user study design to evaluate
                          performance metrics of <br />
                          two locomotion methods (Redirected Walking and Virtuix
                          Omni)
                          <br />
                          Created robust virtual experience to conduct the
                          experimental condition
                          <br />
                          automatically. <br />
                        </>
                      </span>
                      <span className="text-red-A100 font-jura text-left font-normal">
                        Video Link (coming soon)
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base text-right text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Published short paper June 2022 in ISMAR 2022
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtJuraRegular16"
                    >
                      <span className="text-white-A700 font-jura text-left font-normal">
                        <>
                          Cross Reality interaction methods with Matt Gottsacker
                          for CAP XXXX
                          <br />
                          As a team, designed and conducted user study to
                          evaluate the effect of
                          <br />
                          Gottsacker’s working interruption cue prototype.
                          Designed a theoretical
                          <br />
                          yet ecological valid scenario to test function and
                          gather user attitudes
                          <br />
                          towards the interactions. <br />
                        </>
                      </span>
                      <span className="text-red-A100 font-jura text-left font-normal">
                        Publication Link (coming soon)
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base text-right text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Research with Boarding Ring
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtJuraRegular16"
                    >
                      <>
                        Evaluating cybersickness reduction techniques
                        <br />
                        Working alongside leadership at Boarding Ring to
                        evaluate Seenetic VR, <br />
                        their solution for cybersickness in Virtual Reality.{" "}
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base text-right text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Research with Lockheed Martin
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtJuraRegular16"
                    >
                      <>
                        Gaze adaptive interactions and user interfaces in AR
                        with gaze tracking <br />
                        visualizations
                        <br />
                        Research and design of new methods for LMCO to utilize
                        gaze tracking <br />
                        to improve the design and user experience of AR
                        applications.{" "}
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[100px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                    size="txtJuraRegular32"
                  >
                    Digital Experiences
                  </Text>
                  <div className="flex flex-col gap-[47px] items-start justify-start max-w-[1440px] w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base text-right text-white-A700 w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Snapchat AR Lens
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            SIGGRAPH 2023 T-Shirt AR Lens with Dr. Mark
                            Billinghurst
                            <br />
                            Developed using lens studio
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://s2023.siggraph.org/presentation/?id=histc_140&sess=sess422" rel="noreferrer">Project Link</a>
                        </span>
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base text-right text-white-A700 w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Snapchat AR Lens
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            Halloween Party Lens
                            <br />
                            October 2023
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=86d8441d99a84425be2f9372ee6e17ea&metadata=01" rel="noreferrer">Project Link</a>
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                    size="txtJuraRegular32"
                  >
                    Presentations and Speaking Opportunities
                  </Text>
                  <div className="flex flex-col gap-[47px] items-start justify-start max-w-[1440px] w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base text-right text-white-A700 w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Invited Panelist
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            “How AI and Metaverse will impact our future”
                            <br />
                            2023 Central Fl NCWIT Aspirations in Computing Award
                            Ceremony
                            <br />
                            April 15, 2023
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                          <a href="https://stem.ucf.edu/wp-content/uploads/2023/04/2023-NCWIT-Aic-Program-Full-1.pdf" rel="noreferrer">Program Link</a>
                        </span>
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base text-right text-white-A700 w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Research Presentation
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            “Building a Successful Imaging Project in the
                            Digital Humanities”
                            <br />
                            History and Literature Master’s Program, Columbia
                            University
                            <br />
                            Paris, France
                            <br />
                            May 17, 2019
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                          <a href="https://globalcenters.columbia.edu/sites/default/files/content/Paris/Publications/digital%20humanities.pdf" rel="noreferrer">Program Link</a>
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>

          <div className="flex flex-col font-kiranghaerang md:gap-10 gap-[0] h-[281px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[236px] py-[78px] w-full">
            <Img
              className="h-12 w-[47px]"
              src="images/img_frame.svg"
              alt="frame_Four"
            />
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtKirangHaerangRegular16"
            >
              <>
                website under construction, last updated: 11/27/2023
                <br />
                email me at raiffa.syamil [at] ucf.edu -- feedback and creative
                ideas welcome!
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;

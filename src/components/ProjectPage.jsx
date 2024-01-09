import { Img, List, Text } from "components";
export function ProjectPage({ pageRef }) {
    return (
        <div key={"elemProj"} ref={pageRef} className="flex flex-col md:gap-10 gap-[100px] h-[2000px] md:h-auto items-start justify-start max-w-[1440px] w-full">
              <div className="flex flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                  size="txtJuraRegular32"
                >
                  Research and Development
                </Text>
                <div className="flex flex-col gap-[47px] h-[850px] md:h-auto items-start justify-start max-w-[1440px] w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="max-w-[710px] md:max-w-full text-base text-right text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      paper in progress
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Scoping review with dynamic topic modeling of <br/>360-degree video applications
                      areas <br></br>Fall 2023-Present
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base text-right text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Poster accepted for IEEEVR 2024
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      <span className="text-white-A700 font-jura text-left font-normal">
                        <>
                          Physical locomotion techniques and presence in virtual
                          reality
                          <br />Fall/Spring 2022
                          <br />
                          Responsible for user study design to evaluate
                          performance metrics of <br />
                          two locomotion methods (Redirected Walking and Virtuix
                          Omni)
                          <br />
                          Created complete virtual experience in UE4 for use with HTC Vive Cosmos. <br></br>
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
                          for CAP XXXX <br />
                          Fall Semester 2021
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
                      <a href="https://ieeexplore.ieee.org/abstract/document/9974530" rel="noreferrer">Publication Link</a>
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
                        Evaluating cybersickness reduction techniques <br/> Summer/Fall 2023
                        <br />
                        Working alongside leadership at Boarding Ring to
                        evaluate Seenetic VR, <br />
                        their solution for cybersickness in Virtual Reality. <br/>
                        Compiled publically available 360-degree videos for automatic playback <br/> 
                        and data collection in Unity for use with
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
                        visualizations <br /> Fall 2023/Spring 2024
                        <br />
                        Research and design of new methods for LMCO to utilize
                        gaze tracking <br />
                        to improve the design and user experience of AR
                        applications.<br/>
                        Developed in Unity with OpenXR for use with Hololens 2. <br/>{" "}
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
                        360-Degree Video concept
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            "Eye Spy"
                            <br />
                            Fall 2023
                            <br />
                            Testing eye spy concept to use for a research project comparing <br/>monoscopic and steroscopic 360-degree video
                            <br/>
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://www.youtube.com/playlist?list=PLNRs9nCboNSSzjFt99xWhDz3sNMNBA5gP" rel="noreferrer">Project Link</a>
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
                            Designed in Canva, developed in Lens Studio <br/>
                            October 2023
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=86d8441d99a84425be2f9372ee6e17ea&metadata=01" rel="noreferrer">Project Link</a>
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
                            SIGGRAPH 2023 T-Shirt AR Lens with Dr. Mark
                            Billinghurst
                            <br />
                            Summer 2023 <br/>
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
                        VR Experience
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            Virtual Reality Dining Room Experience
                            <br />
                            Spring 2023 VR Engineering Class Project
                            <br />
                            Developed with Unity and OpenXR for use with HP Omnicept. <br/>
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://www.youtube.com/playlist?list=PLNRs9nCboNSQZKt2KeMqN7Eu3ymWBUPpq" rel="noreferrer">Project Link</a>
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
                        Rejected Speaking Proposal
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            “Cinematic VR: Immersive Storytelling of the Future”
                            <br />
                            SXSW2024 speaker proposal
                            <br />
                            Summer 2023
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                          <a href="https://youtu.be/yOzFuwR2Uoc" rel="noreferrer">Proposal Link (view on mobile or VR headset)</a>
                        </span>
                      </Text>
                    </div>
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
    )
}
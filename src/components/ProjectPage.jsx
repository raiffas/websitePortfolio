import { Img, List, Text } from "components";
export function ProjectPage({ pageRef }) {
    return (
        <div key={"elemProj"} ref={pageRef} className="flex flex-col md:gap-10 gap-[100px] h-[2000px] md:h-auto items-start justify-start max-w-[1440px] w-full">
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
    )
}
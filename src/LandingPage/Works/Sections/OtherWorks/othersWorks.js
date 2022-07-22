import React from 'react'
import OtherCard from '../../../../Components/OtherWorkCard/otherCard'
import portfolio from '../../../../images/compressed/portfolio.PNG'
import hris from '../../../../images/compressed/hris-min.JPG'
import gmilk from '../../../../images/compressed/gmilk-min.JPG'
import clone from '../../../../images/compressed/clone-min.JPG'
import coronapp from '../../../../images/compressed/coronapp-min.JPG'
import darkmode from '../../../../images/compressed/darkmode-min.JPG'
import Tag from '../../../../Components/Tag/tag'
import { OtherWorksContainer, OtherWorksWrapper } from './otherWorks-elements'
import Slide from 'react-reveal/Slide';

const OtherWorksSection = () => {
    return (
        <>
            <OtherWorksContainer withMargin>
                <OtherWorksWrapper>
                    <span className='section-title'>Big Projects</span><br /> <br />
                </OtherWorksWrapper>
                <Slide right cascade >
                    <OtherWorksWrapper>
                        <OtherCard
                            title="My Portfolio"
                            imgPath={portfolio}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            tag={
                                <>
                                    <Tag title={"React"} />
                                    <Tag title={"styled-components"} />
                                    <Tag title={"SCSS"} />
                                    <Tag title={"Ant Design"} />

                                </>}

                            projectLink="https://rodel-cabil-portfolio.web.app/"
                            sourceCodeLink="https://github.com/rodelcabil?tab=repositories"
                        />
                        <OtherCard
                            title="National University HRIS"
                            imgPath={hris}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            tag={
                                <>
                                    <Tag title={"React"} />
                                    <Tag title={"styled-components"} />
                                    <Tag title={"SCSS"} />
                                    <Tag title={"Ant Design"} />
                                    <Tag title={"Material UI"} />

                                </>}

                            projectLink="https://nu-hris.web.app/"
                            sourceCodeLink="https://github.com/rodelcabil?tab=repositories"
                        />
                        <OtherCard
                            title="GMilk"
                            imgPath={gmilk}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            tag={
                                <>
                                    <Tag title={"React"} />
                                    <Tag title={"styled-components"} />
                                    <Tag title={"SCSS"} />
                                    <Tag title={"Ant Design"} />

                                </>}

                            projectLink="https://gmilkph.web.app/"
                            sourceCodeLink="https://github.com/rodelcabil?tab=repositories"
                        />

                    </OtherWorksWrapper>
                </Slide>
            </OtherWorksContainer>
            <OtherWorksContainer>
                <OtherWorksWrapper>
                    <span className='section-title'>Small Projects</span><br /> <br />
                </OtherWorksWrapper>
                <Slide left cascade>
                    <OtherWorksWrapper>
                        <OtherCard
                            title="Student Portal Clone"
                            imgPath={clone}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            tag={
                                <>
                                    <Tag title={"React"} />
                                    <Tag title={"Tailwind CSS"} />


                                </>}
                            projectLink="https://nuis-clone.web.app/"
                            sourceCodeLink="https://github.com/rodelcabil?tab=repositories"
                        />
                        <OtherCard
                            title="CoronApp"
                            imgPath={coronapp}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            tag={
                                <>
                                    <Tag title={"React"} />
                                    <Tag title={"Tailwind CSS"} />
                                    <Tag title={"API"} />
                                </>}
                            projectLink="https://coronapp-9f166.web.app/"
                            sourceCodeLink="https://github.com/rodelcabil?tab=repositories"
                        />
                        <OtherCard
                            title="Dark Mode"
                            imgPath={darkmode}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            tag={
                                <>
                                    <Tag title={"React"} />
                                    <Tag title={"styled-components"} />
                                    <Tag title={"React Hooks"} />

                                </>}
                            projectLink="https://dark-theme-mode.web.app/"
                            sourceCodeLink="https://github.com/rodelcabil?tab=repositories"
                        />
                    </OtherWorksWrapper>
                </Slide>
            </OtherWorksContainer>
        </>
    )
}

export default OtherWorksSection

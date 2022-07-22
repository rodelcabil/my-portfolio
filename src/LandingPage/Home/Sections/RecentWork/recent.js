import React from 'react'
import Slide from 'react-reveal/Slide';
import RecentWorkCard from '../../../../Components/RecentWorkCard/recentCard'
import Tag from '../../../../Components/Tag/tag'
import clone  from '../../../../images/compressed/clone-min.JPG'
import coronapp  from '../../../../images/compressed/coronapp-min.JPG'
import darkmode  from '../../../../images/compressed/darkmode-min.JPG'
import { RecentContainer, GridContainer } from './recent-elements'

const RecentWorkSection = () => {
    return (
        <RecentContainer>
            <GridContainer>
                <p className="sectionHeader">RECENT WORKS</p><br/>  
            </GridContainer>
            <Slide right cascade >
            <GridContainer>
                <RecentWorkCard 
                    projectTitle="Student Portal Clone" 
                    imgPath={clone}
                    projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    tag={
                        <>
                            <Tag title={"React"}/> 
                            <Tag title={"Tailwind CSS"}/>
                        </>}

                />
                <RecentWorkCard 
                    projectTitle="CoronApp" 
                    imgPath={coronapp}
                    projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    tag={
                        <>
                            <Tag title={"React"}/> 
                            <Tag title={"Tailwind CSS"}/>
                            <Tag title={"API"}/>
                        </>}
                     />
                <RecentWorkCard 
                    projectTitle="Dark Mode" 
                    imgPath={darkmode}
                    projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    tag={
                        <>
                            <Tag title={"React"}/> 
                            <Tag title={"styled-components"}/>
                            <Tag title={"React Hooks"}/>
                            
                            
                        </>}
                    
                />  
            </GridContainer>
            </Slide>
        </RecentContainer>
    )
}

export default RecentWorkSection

import React from 'react'
import Tag from '../Tag/tag'
import { RecentCardContainer } from './recentCard-elements'

const RecentWorkCard = ({imgPath, projectTitle, projectDescription, tag}) => {
    return (
        <RecentCardContainer>
            <img src={imgPath} alt={projectTitle}/>
            <div className='detailsContainer'>
                <p className="projectTitle">{projectTitle}</p>
                <p  className="projectDescription">{projectDescription}</p>
                <div className='tag-container'>
                    {tag}
                </div>
            </div>
        </RecentCardContainer>
    )
}

export default RecentWorkCard

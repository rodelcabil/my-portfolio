import React from 'react'
import { CardButton } from '../../globalStyles'
import { OtherCardComponent } from './otherCard-elements'
import { BiCodeAlt, BiShowAlt } from 'react-icons/bi'

const OtherCard = ({ imgPath, title, description, tag, projectLink, sourceCodeLink }) => {
    return (
        <OtherCardComponent>
            <img className="imgs" src={imgPath} alt="Project img" />
            <div className="detailsContainer">
                <div className='cardHeader'>
                    <span className="projTitle">{title}</span>
                    <div>
                        <CardButton href={projectLink} target="_blank" className='viewButton'><BiShowAlt className="button-icon" /><span>&nbsp;Visit Site</span></CardButton>
                    </div>
                    
                </div>
                <br/>
                <p className="projDescription">{description}</p>

                <div className='tag-container'>
                    {tag}
                </div>

            </div>
        </OtherCardComponent>
    )
}

export default OtherCard

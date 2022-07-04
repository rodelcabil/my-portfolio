import React from 'react'
import { CardButton } from '../../globalStyles'
import { OtherCardComponent } from './otherCard-elements'
import { BiCodeAlt, BiShowAlt } from 'react-icons/bi'

const OtherCard = ({imgPath, title, description, tag, projectLink, sourceCodeLink}) => {
    return (
        <OtherCardComponent>
            <img className="imgs" src={imgPath} alt="Project img"/>
            <div className="detailsContainer">
                <p className="projTitle">{title}</p>
                <p className="projDescription">{description}</p>
                
                <div className='tag-container'>
                    {tag}
                </div>
                <div className='button-container'>
                    <CardButton href={projectLink} target="_blank"><BiShowAlt className="button-icon"/>&nbsp;View Demo</CardButton>
                    <CardButton href={sourceCodeLink} target="_blank"><BiCodeAlt className="button-icon"/>&nbsp;Source Code</CardButton>
                </div>
            </div>
        </OtherCardComponent>
    )
}

export default OtherCard

import React from 'react'
import { Progress } from 'antd';
import { SkillCardContainer } from './skillCard-elements';
const SkillCard = ({title, imgPath}) => {
    return (
        <SkillCardContainer>
             <img src={imgPath} alt={title}/>
             <span>{title}</span>
        </SkillCardContainer>
    )
}

export default SkillCard

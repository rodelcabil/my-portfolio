import React from 'react'
import SkillCard from '../../../../Components/SkillCard/skillCard'
import { Column, RowContainer, SkillsContainer } from './skills-elements'

const SkillsSection = () => {
    return (
        <SkillsContainer>
            <Column>
                <span className="header">MY SKILLS</span>
                <span className="description">These are the technologies I have experience with.</span>
            </Column>
            <RowContainer>
                <SkillCard title="HTML" imgPath="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" />
                <SkillCard title="CSS"  imgPath="https://camo.githubusercontent.com/b059b3150634ebbb37fac310309b3c4a841b0ecdabcc7409c0067397f8a3931b/687474703a2f2f696f31332d686967682d6470692e61707073706f742e636f6d2f696d616765732f435353335f4c6f676f2e737667" />
                <SkillCard title="JAVASCRIPT" imgPath="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png" />
                <SkillCard title="REACT JS"  imgPath="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"  />
                <SkillCard title="TAILWIND CSS"  imgPath="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"  />
               
            </RowContainer>
        </SkillsContainer>
    )
}

export default SkillsSection

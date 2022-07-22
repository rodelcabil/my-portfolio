import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../Components/Button/button'
import { Button } from '../../globalStyles'
import { FooterSection, FooterContainer, FooterDescription, CopyRights } from './footer-elements'


const  Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterDescription>
                   Are you interested?<br/> You can Contact me now.
                </FooterDescription>
                <Link to="/contact"><CustomButton title="Contact now" /></Link>
                <CopyRights>
                    <span>Copyright 2021 | RC PORTFOLIO</span>
                    <span>Powered by: RODEL E. CABIL</span>
                </CopyRights>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer

import React from 'react'
import { Button } from '../../globalStyles'
import { FooterSection, FooterContainer, FooterDescription, CopyRights, Socials } from './footer-elements'
import {ImLinkedin, ImFacebook2} from 'react-icons/im'
import {FaTwitter} from 'react-icons/fa'

const  Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterDescription>
                   Are you interested?<br/> You can Contact me now.
                </FooterDescription>
                <Button>Contact Now</Button>
                <CopyRights>
                    <span>Copyright 2021 | RC PORTFOLIO</span>
                    <Socials>
                        <ImLinkedin className='social-icons'/>
                        <ImFacebook2 className='social-icons'/>
                        <FaTwitter className='social-icons'/>
                    </Socials>
                    <span>Powered by: RODEL E. CABIL</span>
                </CopyRights>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer

import React from 'react'
import { SocialMediaContainer, Socials } from './socialMedia-elements'
import {ImLinkedin, ImFacebook2} from 'react-icons/im'
import {FaTwitter} from 'react-icons/fa'
import  {AiFillInstagram} from 'react-icons/ai'
const SocialMedia = () => {
    return (
        <SocialMediaContainer>
            <Socials>
                <a href="https://www.linkedin.com/in/rodel-cabil-1090b5226/" target="_blank" rel="noreferrer"><ImLinkedin className='social-icons' /></a>
                <a href="https://www.facebook.com/rodel.cabil/" target="_blank" rel="noreferrer"><ImFacebook2 className='social-icons' /></a>
                <a href="https://twitter.com/rodelcabil_" target="_blank" rel="noreferrer"><FaTwitter className='social-icons' /></a>
                <a href="https://www.instagram.com/rodelcabil_/" target="_blank" rel="noreferrer"><AiFillInstagram className='social-icons ig' /></a>
            </Socials>
        </SocialMediaContainer>
    )
}

export default SocialMedia
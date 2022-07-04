import React from 'react'
import { Column, ContactsContainer, RowContainer } from './contact-elements'
import {MdAlternateEmail, MdLocationOn, MdLocalPhone} from 'react-icons/md'
import {Input} from 'antd'
import {ImLinkedin, ImFacebook2} from 'react-icons/im'
import {FaTwitter} from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { Socials } from '../Footer/footer-elements'

const { TextArea } = Input;

const Contact = () => {
    return (
        <ContactsContainer>
            <RowContainer>
                <Column>
                    <span className="header">CONTACT</span>
                    <span className="subheader">Are you interested?</span>
                    <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span><br/>
                    <div className="contactDetailsContainerWrapper">
                        <div className="contactDetailsContainer">
                            <MdAlternateEmail className="icons"/> 
                            <span>rodeliocabil0@gmail.com</span>
                        </div>
                        <div className="contactDetailsContainer">
                            <MdLocationOn className="icons"/> 
                            <span>San Mateo, Rizal</span>
                        </div>
                        <div className="contactDetailsContainer">
                            <MdLocalPhone className="icons"/> 
                            <span>09123965701</span>
                        </div><br/>
                    </div>
                     <span className="follow">Follow me</span>
                    <Socials>
                        <ImLinkedin className='social-icons'/>
                        <ImFacebook2 className='social-icons'/>
                        <FaTwitter className='social-icons'/>
                    </Socials>
                </Column>
                <Column>
                    <div className="formContainer">
                        <Input size="large" placeholder="Full Name" /><br/>
                        <Input size="large" placeholder="Email" /><br/>
                        <TextArea
                        placeholder="Enter your Message"
                        autoSize={{ minRows: 4, maxRows: 6 }}
                        />
                        <Button>Submit</Button>
                    </div>
                </Column>
            </RowContainer>
           
        </ContactsContainer>
    )
}

export default Contact

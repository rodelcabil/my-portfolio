import React from 'react'
import { AboutContainer, Column, RowContainer } from './about-elements'
import { Button } from '../../globalStyles'
import SkillsSection from './Section/Skills/skills'
import Footer from '../Footer/footer'
const About = () => {
    return (
        <>
        <AboutContainer>
            <RowContainer>
                <Column>
                    <span className="header">ABOUT ME</span>
                    <span className="subheader">RODEL <span className="sp">E. CABIL</span></span>
                    <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span><br/>
                    <div className="experienceContainerWrapper">
                        <div className="experienceContainer"> 
                            <span className="years">06+</span>
                            <span className="expTitle">Years Experience</span>
                        </div>
                        <div className="experienceContainer"> 
                            <span className="years">09+</span>
                            <span>Completed Projects</span>
                        </div>
                        <div className="experienceContainer"> 
                            <span className="years">99+</span>
                            <span>Past Companies</span>
                        </div>
                    </div>
                    <Button>Download cv</Button>
                </Column>
                <Column>
                    <div className="imageContainer">
                        <img className="img-1" src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="My Pictures" />
                        <img className="img-2" src="https://media.istockphoto.com/photos/software-developers-doing-some-research-picture-id1016662006?b=1&k=20&m=1016662006&s=170667a&w=0&h=rRERH0aNQ4NwEk0bj8bslKds7atR-LIJ3iNazpaPBjQ= " alt="My Pictures" />
                        <img className="img-3" src="https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=" alt="My Pictures" />
                    </div>
                </Column>
            </RowContainer>
        </AboutContainer>
        <SkillsSection/>
        <Footer />
        </>
    )
}

export default About

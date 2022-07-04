import React from 'react'
import { 
    HomeContainer, 
    RowContainer,
    Column,
    Heading,
    Subtitle,
    ImageComponent,
 } from './home-elements'
import Footer from '../Footer/footer';
import Me from '../../images/me.JPG'
import RecentWorkSection from './Sections/RecentWork/recent'
import {Button}  from '../../globalStyles'


const Home = () => {
    return (
        <>
        <HomeContainer>
            <RowContainer>
                <Column>
                    <Heading>
                        I am<br/> <span>Rodel</span> E. Cabil
                    </Heading>
                    <Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore. 
                    </Subtitle>
                    <Button>See my works</Button>
                    
                </Column>
                <Column>
                    <ImageComponent src={Me} alt="Me"/>
                </Column>
            </RowContainer>
        </HomeContainer>
        <RecentWorkSection/>
        <Footer />
        </>
    )
}

export default Home

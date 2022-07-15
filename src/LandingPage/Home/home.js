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
import Me from '../../images/me.png'
import RecentWorkSection from './Sections/RecentWork/recent'
import { Button } from '../../globalStyles'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particles } from './particles';

const Home = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };



    return (
        <>

            <HomeContainer>

                <RowContainer>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        preset="links"
                        options={particles}
                    />
                    <Column>
                        <Heading>
                            I am<br /> <span>Rodel</span> E. Cabil
                        </Heading>
                        <Subtitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore.
                        </Subtitle>
                        <Button>See my works</Button>

                    </Column>
                    <Column >
                        <ImageComponent src={Me} alt="Me" />
                    </Column>

                </RowContainer>

            </HomeContainer>
            <RecentWorkSection />
            <Footer />
        </>
    )
}

export default Home

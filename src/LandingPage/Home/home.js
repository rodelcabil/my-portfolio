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
                    preset="stars"
                    options={{
                        fullScreen: {
                            enable: false,
                            
                            zIndex: 1
                        },
                        fpsLimit: 120,
                        background: {
                            color: "transparent"
                        },
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },

                                resize: true
                            },
                            modes: {
                                push: { quantity: 4 },
                                repulse: { distance: 200, duration: 0.4 }
                            }
                        },
                        particles: {
                            color: { value: "#ffffff" },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: "bounce",
                                random: false,
                                speed: 0.2,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800
                                },
                                value: 50
                            },
                            opacity: {
                                animation: {
                                    enable: true,
                                    speed: 0.05,
                                    sync: true,
                                    startValue: "max",
                                    count: 1,
                                    destroy: "min"
                                },
                                value: {
                                    min: 0,
                                    max: 0.5
                                }
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                value: { min: 1, max: 5 }
                            },
                            detectRetina: true
                        }
                    }}
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
                    <Column>
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

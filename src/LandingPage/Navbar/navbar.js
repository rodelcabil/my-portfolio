import React, { useState } from 'react'
import {
    FaBars,
    FaTimes
} from 'react-icons/fa';

import {CgMenuRightAlt, CgClose} from 'react-icons/cg'
import { IconContext } from 'react-icons/lib';
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,

} from './navbar-elements';

import Logo from '../../images/Logo.JPG'
const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <>
            <style type="text/css">{`
                .active{
                   
                    color: #2988B4;
                    border-top: 5px solid #2988B4;
                    padding-top: 3px;
                    font-weight: 500;
                }

                @media screen and (max-width: 910px){
                    .active{
                        color: #fff;   
                        border-top:0;
                        background: #2988B4;
                        padding-top: 15px;
                    }

                    .active:hover{
                        color: #fff;   
                    }
                }

                .icons{
                    color: white;
                }
            `
            }
            </style>
            <IconContext.Provider value={{ color: '#555' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <div className="logoContainer">
                                <img src={Logo} className="logo" alt="Logo"/>
                                <span>Portfolio</span>
                            </div>
                        </NavLogo>
                        <MobileIcon onClick={handleClick} >
                            {click ? <CgClose style={{color: 'white'}}/> : <CgMenuRightAlt style={{color: 'white'}}/>}
                        </MobileIcon>
                        <div>
                            <NavMenu onclick={handleClick} click={click}>
                                <NavItem>
                                    <NavLinks exact to="/" onClick={closeMobileMenu} activeClassName="active">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks exact to="/works" onClick={closeMobileMenu} activeClassName="active">Works</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks exact to="/about" onClick={closeMobileMenu} activeClassName="active">About</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks exact to="/contact" onClick={closeMobileMenu} activeClassName="active">Contact</NavLinks>
                                </NavItem>
                               {/* <BsLightningChargeFill className="darkModeIcon" style={{color: 'yellow'}}/> */}
                            </NavMenu>
                           
                        </div>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

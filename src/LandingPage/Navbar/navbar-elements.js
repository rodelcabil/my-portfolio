import styled from 'styled-components';
import {Container} from '../../globalStyles'
import {NavLink , Link} from 'react-router-dom';
import {FaMagento} from 'react-icons/fa';



export const Nav =  styled.nav`
background: #0D1B2A;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
position: fixed;
top: 0;
z-index: 999;
width: 100%;
margin: auto;
padding: 0 60px 0 60px;
@media screen and (max-width: 910px){
    width: 100%;
    padding: 0 10px 0 10px;
}

`;

export const NavbarContainer =  styled(Container)`
height: 60px;
display: flex;

margin: auto;
max-width: 1500px;
justify-content: space-between;
${Container}


@media (min-width: 250px) and (max-width: 910px){
    padding: 0;

}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: center;
cursor: pointer;
text-decoration: none;
font-weight: bold;
font-size: 1.3rem;
display: flex;
align-items: center;

.logoContainer{
    display: flex;
    flex-direction: column;
    
  

    span{
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
    }

    @media screen and (max-width: 910px){
       
   
    }
}

.logo{
    height: 30px;
    width: 50px;
}

&:hover{
    color: #555;
    text-decoration: none;
   
}
`;

export const NavIcon = styled(FaMagento)`
margin: 0.5rem;
color: #fff;

@media screen and (max-width: 910px){
    margin-left: 3rem;
   
}
`;

export const MobileIcon = styled.div`
    display: none;
    color: #fff;
    .icons{
        color: #fff
    }

    @media screen and (max-width: 910px){
        display: block;
        position: absolute;
        top: 0; 
        right: 0;
        margin-right : -20px;
        font-size: 1.8rem;
        transform: translate(-100%, 16%);
        cursor: pointer;
        color: white;
       
    }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

.darkModeIcon{
    color: yellow;
    font-size: 18px;

    &:hover{
        cursor:pointer;
    }
}

@media screen and (max-width: 910px){
    display: flex;
    flex-direction: column;
    width: 50%;
    height: calc(100vh - 60px);  
    position: absolute;
    top: 60px;
    right: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0D1B2A;
    padding-left: 0px;
  
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);
}
`; 


export const NavItem = styled.li`
height: 60px;
display: inline-block;
text-align: center;
color: #fff;


/* 
&:hover{ 
    background: #FEEAE8;
    color:#fff;
    ;
    
} */

@media screen and (max-width: 910px){
    width: 100%;
    /* &:hover{
        border: none;
    } */
}
`;

export const NavLinks = styled(NavLink)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

&:hover{
    text-decoration: none;
}

@media screen and (max-width: 910px){
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover{
        color: #2988B4;
        transition: all 0.3s ease;
       
        text-decoration: none;
        
    }
}
`;

export const NavItemBtn = styled.li`
   display: flex;
   
@media screen and (max-width: 910px){
    display: none;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
}
`;

export const NavItemBtn2 = styled.li`
   display: none;
   
@media screen and (max-width: 910px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
}
`;

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;


&:hover{
  
    text-decoration: none;
}
`; 
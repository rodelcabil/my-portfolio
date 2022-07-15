import styled,{createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Montserrat', sans-serif;
    }

    &::-webkit-scrollbar {
            width: 8px;               /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
         background: #fff;
       
                 /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
    background-color: #C4C4C4;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
                            /* creates padding around scroll thumb */

    }

    &::-webkit-scrollbar-thumb:hover {
            background-color: #295074;    
        }
`;


export const Container =  styled.div`
z-index: 1;
width: 100%;
max-width: 2100px;
margin-right: auto; 
margin-left: 0;


@media screen and (max-width: 991px){
    padding-left: 0;
    padding-right: 0;
}
`;

export const Button = styled.button`
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    background-color: #295074;
    color:  #fff;
    margin: 40px 0;
    border: none;
    height: 40px;
    border-radius: 5px;
    width: 200px;
    cursor: pointer;

   

    &:hover{
         color:  #fff;
         transition: background 0.5s;
    }

    @media screen and (max-width: 912px){
        
        height: 40px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 30px
    } 
`;

export const CardButton = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center ;
    background-color: #295074;
    color:  #fff;
    border: none;
    height: 30px;
    padding: 4px 12px ;
    border-radius: 3px;
    width: fit-content;
    cursor: pointer;
    margin-right: 10px;

   

    &:hover{
         color:  #fff;
         transition: background 0.5s;
    }

    @media screen and (max-width: 912px){
        
        height: 30px;
        margin: auto;
       
    } 
`;

export default GlobalStyle
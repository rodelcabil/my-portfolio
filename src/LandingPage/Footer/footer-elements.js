import styled from 'styled-components';

export const FooterSection =  styled.footer`
background: #040A0E;

@media screen and (max-width: 910px){
    width: 100%;

}

`;

export const FooterContainer =  styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 16px;
width: 100%;
margin: auto;
padding: 60px ;
padding-bottom: 10px;

max-width: 1500px;



@media screen and (max-width: 600px){
    width: 100%;
    padding: 10px;
}

`;


export const FooterDescription = styled.span`
    color: #fff;
    padding: 0;
    font-size: 30px;
    max-width: 500px;
    text-align: center;
    font-weight: 400;

    @media (min-width: 701px) and (max-width: 800px){
          font-size: 25px;
        padding: 0 20px 0 20px;
    }     

    @media (min-width: 250px) and (max-width: 700px){
        font-size: 20px;
        
        padding:10px;
    }
   
`;


export const Socials = styled.div `
    display: flex;
    width: 90px;
    justify-content: space-between;
    bottom: 0px;
    font-weight: 500;

    .social-icons{
        font-size: 22px;
        color: #2988B4;
        cursor: pointer;

    }



    @media screen and (max-width: 600px){
        margin-top: 20px;
    }
`

export const CopyRights = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #fff;
    padding: 0;
    font-size: 13px;    
    text-align: center;
    font-weight: 400;
    align-items: center;

    @media (min-width: 701px) and (max-width: 800px){
        margin-top: 20px;
        font-size: 15px; 
        padding: 0 20px 0 20px;
    }     

    @media (min-width: 250px) and (max-width: 700px){
        margin-top: 20px;
        font-size: 13px; 
        flex-direction: column;
        padding:10px;
    }
   
`;
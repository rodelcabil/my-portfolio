import styled from 'styled-components';

export const HomeContainer = styled.div`
   
    background: #0D1B2A;
    padding: 60px; 

   

    @media screen and (max-width: 600px){
        padding: 10px;
    }
   
`;

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
   
    max-width: 1500px;
    margin: auto;
    
    #tsparticles{
        position : absolute;
        width:100%;
        height:100%;
        z-index: 1;

        
    }
    
    @media screen and (max-width: 800px){
        margin-top: 30px;
        padding: 0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }


    @media screen and (max-width: 600px){
        margin-top: 50px;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
        flex-basis: 50%;
    }
   
`;

export const Column = styled.div`
    flex-basis: 50%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    color: #fff;
    z-index: 100;
    background: transparent;

    @media (min-width: 701px) and (max-width: 800px){
        border-radius: 20px;
        margin: auto;
        z-index: 100;
        flex-basis: 100%;
    }

    @media (min-width: 250px) and (max-width: 700px){
        flex-basis: 100%;
        z-index: 100;
    }
    
`;

export const Heading = styled.h1`
    font-size: 60px;
    line-height: 60px;
    margin: 50px 0;
    color: #fff;
    font-weight: bolder;
    padding: 0;

    span{
        font-weight: bolder;
        color: #2988B4;
    }
    
    @media (min-width: 701px) and (max-width: 800px){
        padding-top: 25px;
        font-size: 40px;
        margin: 40px 0;
        line-height: 50px;
        padding: 20px 20px 0 20px;
    }
    @media (min-width: 250px) and (max-width: 700px){
        font-size: 40px;
        line-height: 50px;
        margin: 0;
        padding:10px;
    }
`;

export const Subtitle = styled.span`
    color: #fff;
    padding: 0;
    font-size: 16px;
    font-weight: 400;

    @media (min-width: 701px) and (max-width: 800px){
        padding: 0 20px 0 20px;
    }     

    @media (min-width: 250px) and (max-width: 700px){
        
        padding:10px;
        margin-bottom: 10px;    
    }
   
`;

export const ImageComponent = styled.img`
    max-width: 100%;
    height: 510px;
    display: flex;
    align-self: flex-end;   
    background: transparent;

    @media (min-width: 600px) and (max-width: 800px){
        margin: auto;
    }

    @media screen and (max-width: 600px){
        width: 80%;
        height: 300px;
        margin: auto;
        padding: 20px;
    }
`;



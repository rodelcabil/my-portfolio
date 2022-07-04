import styled from 'styled-components';

export const OtherWorksContainer = styled.div`
   
    background: #fff;
    padding: 60px;
    margin-top: ${({withMargin}) => (withMargin ? '60px' : '0')};
    @media screen and (max-width: 600px){
        padding: 10px;
    }
   
`;

export const OtherWorksWrapper = styled.div`
   
   
    max-width: 1500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    column-gap: 20px;
    margin: auto;

    .section-title{
        font-size: 18px;
    }

    @media (min-width: 801px) and (max-width: 1200px){
    
         grid-template-columns: auto auto;
      
    }

    @media screen and (max-width: 800px){
        display: block;
        margin: auto;
         
       
      
    }
   
`;


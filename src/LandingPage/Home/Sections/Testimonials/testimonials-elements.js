import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
    max-width: 1500px;
    margin: auto;
    padding-right: 25px;
    padding-left: 25px;
    padding-top: 25px;
    padding-bottom: 25px;

    @media screen and (max-width: 600px){
        margin: auto;
        padding-top: 5px;
        
    }
`;

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: 200px; 
    padding-right: 200px; 
    margin-top: 60px;
    
    

    @media screen and (max-width: 600px){
        text-align: center;
        padding: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        
    }
`;

export const Title = styled.h2`
    text-align: center;
    position: relative;
    line-height: 60px;
    color: #555;
    margin-bottom: 20px;
    font-size: 25px;

    &::after{
        content: '';
        background: #2988B4;
        width: 100px;
        height: 5px;
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (min-width: 250px) and (max-width: 700px){
        flex-basis: 100%;
        line-height: 45px;
        &::after{
        content: '';
        background: #FE9C8F;
        width: 100px;
        height: 5px;
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    }
    
`;

export const Description = styled.h4`
    text-align: center;
    margin-bottom: 20px;
    color:  #555;
    font-weight: 300;
    font-size: 16px;


    @media screen and (max-width: 600px){
        margin-bottom: 0px;
       
    }

`;

export const Col3 = styled.div`
    flex-basis: 30%;
    min-width: 250px;
    margin-bottom: 30px;
    text-align: center;
    padding: 40px 20px;
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.1); 
    cursor: pointer;
    transition: transform 0.5s;


    @media (min-width: 500px) and (max-width: 800px){
        padding-right: 10px;
        padding-left: 10px;
        flex-basis: 100%;
        min-width: 400px;
    
    }
`;

export const Paragraph = styled.p`
    font-size: 13px;
    margin: 12px 0;
    color: #777;
    padding: 20px 20px 10px 20px;
 
    @media (min-width: 500px) and (max-width: 800px){

        font-size: 14px;
    }
`;


export const Rating = styled.div`
    padding: 10px;

    .fa{  
            color: #ff523b;
          }

          .fa.fa-quote-left{
            font-size: 34px;
            color: #ff523b;
          }
`;

export const UserImage = styled.img`
    width: 100px;
    margin-top: 20px;
    border-radius: 50%;
`;


export const UserName = styled.h3`
   font-weight: 600;
   color:  #555;
   font-size: 16px;
   padding-top: 10px;
`;
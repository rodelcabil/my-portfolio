import styled from 'styled-components';

export const ContactsContainer = styled.div`
   
    background: #fff;
    padding: 120px 60px;
    display: flex;
    justify-content:  center;
    align-content: center;
    height: calc(100vh - 60px);
    @media screen and (max-width: 600px){
        padding: 10px;
    }
   
`;

export const RowContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1500px;
    margin: auto;
    

    @media screen and (max-width: 800px){
        margin-top: 30px;
        padding: 0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }


    @media screen and (max-width: 600px){
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
    color: #000;

    .header{
        color: #555;
    }
    .subheader{
        color: #2988B4;
        font-size: 40px;
        font-weight: bold;
    }
    .description{
        font-weight: 500;
    }

    .contactDetailsContainer{
        display: flex;
        align-items: center;

        .contactDetailsContainer{
            display: flex;
            align-items: center;
            
            
        }
        .icons{
            margin-right: 5px;
            color: #2988B4;
            font-size: 20px;
        }
        @media (min-width: 250px) and (max-width: 700px){
            justify-content: center;
        
        }
    }

   

    .follow{
        font-size: 15px;
        color: #555;
    }

    .formContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        padding-top: 20px;

        @media (min-width: 250px) and (max-width: 700px){
            padding-left: 0px;
        
        }
    }
    @media (min-width: 701px) and (max-width: 800px){
        border-radius: 20px;
        margin: auto;
        flex-basis: 100%;
    }

    @media (min-width: 250px) and (max-width: 700px){
        flex-basis: 100%;
       
    }
    
`;
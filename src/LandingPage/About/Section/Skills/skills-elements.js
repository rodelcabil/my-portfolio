import styled from 'styled-components';

export const SkillsContainer = styled.div`
   
    background: #fff;
    padding: 60px;
    @media screen and (max-width: 600px){
        padding: 10px;
    }
   
`;

export const RowContainer = styled.div`
    
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 600px;
    margin: auto;
    display: grid;
    grid-template-rows: 200px ;
    grid-template-columns: 200px 200px 200px 200px 200px 200px 200px;
    transition:  0.5s ease;
    margin-top: 20px;
    /* @media screen and (max-width: 800px){
        margin-top: 30px;
        padding: 0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    } */

    @media (min-width: 1101px) and (max-width: 1200px){
        grid-template-rows: 200px 200px ;
        grid-template-columns: 200px 200px 200px 200px;
    }

    @media (min-width: 901px) and (max-width: 1100px){
        grid-template-rows: 200px 200px ;
        grid-template-columns: 200px 200px 200px;
    }

    @media (min-width: 601px) and (max-width: 900px){
        grid-template-rows: 200px 200px;
        grid-template-columns: 200px 200px;
       
    }


    @media screen and (max-width: 600px){
        grid-template-rows: 170px 170px;
        grid-template-columns: 170px 170px;
        margin-left: auto;
        margin-right: auto;
        ${'' /* margin-top: 20px;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
        flex-basis: 50%; */}
    }
   
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    color: #000;

    .header{
        font-size: 30px;
        font-weight: bold;
    }

    .description{
        color: #958C83;
        font-weight: 600;
        max-width: 600px;
        text-align: center;
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
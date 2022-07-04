import styled from 'styled-components';

export const WorksContainer = styled.div`
   
    background: #fff;
    margin-top: 60px;
    padding: 60px; 
    @media screen and (max-width: 600px){
        padding: 10px;
    }
   
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1500px;
    color: #000;
    margin: auto;

    span{
        color: #555;
    }
    .projectTitle{
        color: #2988B4;
        font-size: 40px;
        font-weight: bold;
    }

    /* @media screen and (max-width: 800px){
        margin-top: 30px;
        padding: 0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }*/


    @media screen and (max-width: 600px){
        align-items: center;
        text-align: center;
    } 
   
`;

export const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1500px;
    color: #000;
    margin: auto;

    .projectImg{
        border-radius: 10px;
        width: 200px;
        flex-basis: 49.5%;

        @media screen and (max-width: 600px){
            width: 100%;
            margin-bottom: 10px;
        }
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

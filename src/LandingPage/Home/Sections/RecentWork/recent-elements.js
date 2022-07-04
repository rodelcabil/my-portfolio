import styled from 'styled-components';

export const RecentContainer = styled.div`
   
    background: #fff;
    padding: 60px; 

    .sectionHeader{
       
        color:  #555;
    }
    @media screen and (max-width: 600px){
        padding: 10px;
    }
   
`;

export const GridContainer = styled.div`
    max-width: 1500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
    column-gap: 20px;
    margin: auto;
    
    

    @media (min-width: 801px) and (max-width: 1200px){
    
    grid-template-columns: auto auto;
 
    }

    @media screen and (max-width: 800px){
    display: block;
    margin: auto;
        
        /* align-content: center ; */
    
    }
   
`;
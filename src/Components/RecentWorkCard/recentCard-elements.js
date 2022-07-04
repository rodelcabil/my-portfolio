import styled from 'styled-components';

export const RecentCardContainer = styled.div`
   
    background: #fff;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    min-width: 200px;
    color: #000;
    justify-content: space-between;
    flex-basis: 32%;
    border: 1px solid #eeeeee;
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.1); 
    margin-bottom: 20px;
    border-radius: 5px;

    img{
      
        margin-bottom: 10px;
        height: 230px;
    }

    .detailsContainer{
        padding: 20px;

        .projectTitle{
        font-weight: bolder;
        font-size: 16px;
        margin-bottom: 10px;
        color: #2988B4;
        }
        .projectDescription{
            font-weight: 400;
        }

        .tag-container{
            margin-bottom: 10px;
            width: 100%;
            display:  flex;
            flex-wrap: wrap;

            
        }
    }


    

    @media screen and (max-width: 800px){
        width: 100%;
        margin: auto;
        margin-bottom: 10px;
    }
   
`;

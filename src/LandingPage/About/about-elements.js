import styled from 'styled-components';

export const AboutContainer = styled.div`
   
    background: #0D1B2A;
    padding: 60px;
    margin-top: 60px;
    @media screen and (max-width: 600px){
        padding: 10px;
    }
   
`;

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1500px;
    margin: auto;
    

    @media screen and (max-width: 800px){
      
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
    color: #fff;

    .header{
        color: #c2c2c2;
    }
    .subheader{
        color: #2988B4;
        font-size: 40px;
        font-weight: bold;

        .sp{
            color: #fff;
        }
    }
    .description{
        font-weight: 500;
    }

    .experienceContainerWrapper{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
       
    
        .experienceContainer{
            background: #415A77;
            padding: 20px;
            border-radius: 5px;
            margin-right: 10px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 200px;
            text-align: center;

            .years{
                font-weight: bold;
                font-size: 30px;
            }

            .expTitle{
                font-size: 14px;

            }

            @media screen and (max-width: 600px){
                justify-content: center;
                max-width: 100%;
                margin-bottom: 10px;
                margin-right: 0px;
        
            }
            
        }

        @media screen and (max-width: 600px){
            display: block;
            width: 100%;
       
        }
    }

    
    .imageContainer{
        display: flex;
        flex-direction: row;
        padding-left: 50px ;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        img{
            border-radius: 5px;
        }
        .img-1{
        
            width: 100%;
            max-height: 250px;
            margin-bottom: 5px;
        }
        .img-2, .img-3{
            
          width: 49.5%;
        }   
        
        @media screen and (max-width: 800px){
           padding: 0px;
           margin-top: 30px;
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
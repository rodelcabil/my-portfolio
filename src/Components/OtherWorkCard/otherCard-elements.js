import styled, {keyframes}  from 'styled-components';

const CardAnimation = keyframes`
  0%{
        transition: all 2s ease;
        transform: translateY(0px);
    }
  80%{
        transform: translateY(10px);
  }
`

export const OtherCardComponent = styled.div`

    animation-name: ${CardAnimation} ;
    animation-duration: 0.5s ;
    animation-direction: reverse;
    background: #fff;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    min-width: 200px;
    color: #000;
    justify-content: space-between;
    /* flex-basis: 32%; */
    border: 1px solid #eeeeee;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    margin-bottom: 20px;
    border-radius: 5px;
    
   

    .imgs{
        
        height: 270px;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
    }
    .detailsContainer{
        padding: 20px;

        .cardHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .viewButton{
                margin-right: 0px;
                @media screen and (max-width: 600px){
                    span{
                        display: none;
                    }
                }
            }
            .button-icon{
                font-size: 18px;

                @media screen and (max-width: 600px){
                   font-size: 20px;
                }
            }
            
        }

        .projTitle{
            font-weight: bolder;
            font-size: 16px;
            max-width: 300px;
            color: #2988B4;
        }
        .projDescription{
            font-weight: 400;

        }

        .tag-container{
            margin-bottom: 10px;
            width: 100%;
            display:  flex;
            flex-wrap: wrap;

            
        }

        .button-container{
            margin-bottom: 10px;
            width: 100%;
            display:  flex;
            justify-content: center;

            .button-icon{
                font-size: 18px;
            }

            @media screen and (max-width: 600px){
              
            }
            
        }

        

       

    }

    &:hover{
            transition: all 0.5s ease;
            transform: translateY(-5px);
        }

    @media screen and (max-width: 800px){
       width: 100%;
       margin: auto;
       margin-bottom: 10px;
    }
   
`;
import styled from 'styled-components'

export const Faqs = styled.div`
    display: flex;
    width: 360px;
    flex-direction: column;
    height: 75vh;
    justify-content: space-between;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: white;


    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
        width: 100%;
        background: #272F46;
        margin-top: -20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        
        p{
            font-weight: bold;
            font-size: 16px;
            margin: 0;
            color: #fff;
        }
    }

    .content-message{
        flex-direction: column;
        overflow: auto;
        height: 100%;
        position: relative;
        ${'' /* .msgContainer{
            height: 100%;
            position: relative;
            overflow: auto;
            
            .msgContainerBody{
                position: absolute;
                bottom: 0;
            }
        } */}
       

        &::-webkit-scrollbar {
            width: 5px;            
        }

        &::-webkit-scrollbar-track {
            background: #fff;        
        }

        &::-webkit-scrollbar-thumb {
        background-color: #295074;   
        border-radius: 20px;      
        border: 1px solid #F0F2F5; 
        }

    }
    .content-chatbot{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        .chatbot-welcome-message{
            display: flex;
            flex-direction: column;
           
        
            img{
                height: 200px;
              
            }

            span{
                text-align: center;
                padding: 0px 20px 0px 20px
            }
        }

        
    }

    .bottomContent{
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        padding: 5px 20px 5px 10px;
        cursor: pointer;
        .bars{
            width: 30px;
            height: 30px;
            padding: 5px;
        }

    }

    .collQ{
        overflow-y: auto;
        /* scroll-behavior: smooth; */
        /* height: fit-content; */
        /* flex-basis: 70%; */
        max-height: 20em;
        min-height: 10em;

        .faqList:hover{
            background: #295074;
            color: #fff;
        }

        &::-webkit-scrollbar {
            width: 5px;            
        }

        &::-webkit-scrollbar-track {
            background: #fff;        
        }

        &::-webkit-scrollbar-thumb {
        background-color: #295074;   
        border-radius: 20px;      
        border: 1px solid #F0F2F5; 
        }
    }

    

    
`

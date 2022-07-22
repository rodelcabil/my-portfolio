import styled from 'styled-components';

export const Messages = styled.div`
     
    display: flex;
    flex-direction: column;
    margin: 10px;
    
    

    /* .messageTop.own, .messageBottom.own{
        justify-content:flex-start;
        align-items: center;
    }
    
    .messageTop.own .messageText{
        background-color: #F0F2F5;
        color: black;
        justify-content:flex-end;
        
    }

    

    .messageTop, .messageBottom{
        display: flex;
        align-items: center;
    } */

    /* img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
    } */

    /* span{
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 15px;
        background-color: #FE9C8F;
        padding: 10px;
        max-width: 50%;
        color: white;
    }
    */

    .msg.own{
        display: flex;
        width: auto;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 10px;
        .messageTop{
            display: flex;
            flex-direction: row-reverse;
            align-items: flex-end;
        }

        .messageText{
            margin-left: ${({mode}) => (mode === 2 ? '0' : '10px')};
            margin-right:  ${({mode}) => (mode === 2 ? '0' : '10px')};
            border-radius: 8px;
            background-color: #295074;
            padding: 10px;
            text-align: left;
            color: white;
            max-width:  ${({mode}) => (mode === 2 ? 'none' : '80%')};
            @media (min-width: 250px) and (max-width: 900px){
            
             /* max-width: 110px; */
              
            }
        
        }

        .time{
            font-size: 13px;
            color: #65667b
        }

        @media (min-width: 250px) and (max-width: 900px){
           
            padding: 0;
        }
        

        
    } 

    

    

    .msg{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
       
        width: auto;

        .messageTop{
            display: flex;
            flex-direction: row;
            text-align: left;
            align-items: flex-end;
            justify-content: space-between;
        }

        .messageText{
            margin-left: 10px;
            margin-right:  ${({mode}) => (mode === 2 ? '0' : '10px')};
            border-radius: 8px;
            background-color: #e4e6eb;
            padding: 10px;
            max-width:  ${({mode}) => (mode === 2 ? 'none' : '80%')};
            text-align: left;
            color: black;
            
        }
        .time{
            font-size: 13px;
            color: #65667b
        }
        
    } 

    @media (min-width: 250px) and (max-width: 900px){
           margin: 0;
        }
    

    
`
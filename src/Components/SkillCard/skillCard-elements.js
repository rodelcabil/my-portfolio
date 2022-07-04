import styled from 'styled-components';

export const SkillCardContainer = styled.div`
   
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;

   img{
       height: 100px;
       width: 100px;
       margin-bottom: 10px;
   }

   span{
       font-weight: bold;
       font-size: 20px;

        @media screen and (max-width: 600px){
            padding: 15px;
        }
   }

    @media screen and (max-width: 600px){
        padding: 10px;
    }
   
`;
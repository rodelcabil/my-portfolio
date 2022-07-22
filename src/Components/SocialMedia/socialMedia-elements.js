import styled  from 'styled-components';

export const SocialMediaContainer = styled.div`

    position: fixed;
    padding: 10px;
    background: #ffff;
    display: flex;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    right: left;
    bottom: 0;
    margin-bottom: 100px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    z-index: 100;
    align-items: center;
    box-shadow: -5px 1px 22px -8px rgba(0,0,0,0.75);
`;

export const Socials = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    bottom: 0px;
    font-weight: 500;
    height: 120px;

    .social-icons{
        font-size: 22px;
        color: #295074;
        cursor: pointer;
       
    }
    .social-icons.ig{
        font-size: 26px;
        color: #295074;
        cursor: pointer;
        margin-left: -2px;
    }




`
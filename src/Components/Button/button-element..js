import styled from 'styled-components'

export const Button = styled.button`
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    margin-top: 20px;
    padding: 8px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;

    &::before, &::after{
        content: '';
        display: block;
        position: absolute;
        right: 0;
        left: 0;
        height: calc(50% - 5px);
        border: 1px solid #7D8082;
        transition: all .15s ease;
    }


    &::before{
        bottom: 0;
        border-top-width: 0;
    }

    &::after{
        top: 0;
        border-bottom-width: 0;
    }

    &:active, &:focus {
        outline: none;
    }

    &:active::before,
    &:active::after {
        right: 3px;
        left: 3px;
    }

    &:active::before {
        top: 3px;
    }

    &:active::after {
        bottom: 3px;
    }

    &:hover {
        color: #0f1923;
    }

    &:hover .button_sl{
        width: calc(100% + 15px);
    }

    &:hover .button_lg::after {
        background-color: #fff;
    }



    .button_lg{
        position: relative;
        display: block;
        padding: 10px 20px;
        color: #fff;
        background-color: #0f1923;
        overflow: hidden;
        box-shadow: inset 0px 0px 0px 1px transparent;

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 2px;
            background-color: #0f1923;
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            width: 4px;
            height: 4px;
            background-color: #0f1923;
            transition: all .2s ease;
        }

    }

    .button_sl {
        display: block;
        position: absolute;
        top: 0;
        bottom: -1px;
        left: -8px;
        width: 0;
        background-color: #295074;
        transform: skew(-15deg);
        transition: all .2s ease;
    }

    .button_text {
        position: relative;
    }


`
import React from 'react'
import { Button } from './button-element.'

const CustomButton = ({title}) => {
    return (
        <Button>
            <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">{title}</span>
            </span>
        </Button>
    )
}

export default CustomButton
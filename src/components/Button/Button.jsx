import { colors } from '@material-ui/core';
import React from 'react';
import * as Styled from "./Button.styles"

const Button = ({
    type="submit",
    buttonText,
    path,
    handleSubmit
}) => {
    return (
        <Styled.ButtonContainer>
            <Styled.Button
            type={type}
            onClick={handleSubmit}
            >
                {buttonText}
            </Styled.Button>
        </Styled.ButtonContainer>
    )
};

export default Button;

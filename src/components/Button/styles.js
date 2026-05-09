import styled from "styled-components";

export const Button = styled.button`
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 50%;
    background-color:rgb(198, 201, 175);
    height: 38px;
    margin: 14px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

`

export default Button
import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' 
    ? '1px solid rgb(198, 201, 175)' 
    : '1px solid white'};
    border-radius: 15px;
    cursor: pointer;
    width: ${props => props.theme === 'primary' 
    ? '50%' 
    : '30%'};
    background-color: ${props => props.theme === 'primary' 
    ? 'rgb(198, 201, 175)' 
    : 'transparent'};
    color: ${props => props.theme === 'primary' 
    ? 'black' 
    : 'white'};
    height: 38px;
    margin: 14px;
    font-weight: ${props => props.theme === 'primary' 
    ? 'bold' 
    : 'normal'};
    font-size: 16px;

    &:hover {
        background-color: ${props => props.theme === 'primary' 
        ? 'rgb(198, 201, 175)' 
        : 'rgb(198, 201, 175)'};
        border: ${props => props.theme === 'primary' 
        ? '1px solid rgb(198, 201, 175)' 
        : '1px solid rgb(198, 201, 175)'};
        opacity: ${props => props.theme === 'primary' 
        ? '0.8' 
        : 'none'};
        color: black;
        font-weight: ${ props => props.theme === 'primary'
        ? 'none'
        : 'bold'};
    }

    &:active {
        opacity: ${props => props.theme === 'primary' 
        ? '0.5' 
        : '0.5'};
    }

`

export default Button
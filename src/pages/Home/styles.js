import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    height: 100vh;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;

    background: linear-gradient(
        -45deg,
        #303030,
        #1a1a1a,
rgb(32, 1, 1),
rgb(0, 4, 17)
    );

    background-size: 400% 400%;

    animation: gradientAnimation 10s ease infinite;

    @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;    
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 560px) {
    flex-direction: column;
    gap: 20px;
    }
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid  #d2dbe3;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%; 
    box-sizing: border-box;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 15px;

    span {
        color:rgb(112, 4, 4)
    }
`


export const Title = styled.h2`
    font-size: 40px;
    color: white;
    text-align: center;
    margin-top: 25px;
    white-space: nowrap;

    @media (max-width: 560px) {
    font-size: 24px;
    }
`

export const Span = styled.span``

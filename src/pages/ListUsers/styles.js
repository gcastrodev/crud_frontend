import styled from "styled-components"

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

export const ContainerUsers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

export const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #d2dbe3;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;

    img {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`

export const AvatarUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #d2dbe3;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`
import styled from "styled-components"

export const HeaderBackGround = styled.div`
    display: flex;
    width: 85%;
    height: 30vh;
    margin-top: 100px;
    align-items: center;
    justify-content: center;

    @media screen {
        margin-top: 30px;
    }

    img {
        width: 100%;
        max-width: 800px;
        max-height: 100%;
        justify-content: center;
        border-radius: 30px;
        align-items: center;
        padding: 10px;
    }
`

export default HeaderBackGround
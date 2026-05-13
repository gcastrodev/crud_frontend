import styled from "styled-components"

export const PageContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 16px 24px;

    background: linear-gradient(
        -45deg,
        #303030,
        #1a1a1a,
        rgb(32, 1, 1),
        rgb(0, 4, 17)
    );
    background-size: 400% 400%;
    animation: listUsersGradient 10s ease infinite;

    @keyframes listUsersGradient {
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

export const Title = styled.h2`
    font-size: clamp(1.35rem, 4vw, 2.5rem);
    color: white;
    text-align: center;
    margin: 16px 0 20px;
    padding: 0 12px;
    line-height: 1.25;
    max-width: 100%;

    span {
        color: rgb(112, 4, 4);
    }
`

export const Span = styled.span``

export const UsersScroll = styled.div`
    flex: 1;
    width: 100%;
    max-width: 880px;
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 4px 8px;
    margin-bottom: 8px;

    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.35) transparent;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.25);
        border-radius: 8px;
    }
`

export const ContainerUsers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: stretch;
    width: 100%;
`

export const UserCard = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 18px 48px 18px 18px;
    width: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(210, 219, 227, 0.85);
    border-radius: 14px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);

    @media (min-width: 600px) {
        flex-direction: row;
        align-items: center;
        gap: 20px;
        padding: 20px 52px 20px 20px;
    }
`

export const AvatarUser = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(72px, 18vw, 96px);
    height: clamp(72px, 18vw, 96px);
    border-radius: 50%;
    background: linear-gradient(145deg, #e8ecf0, #d2dbe3);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`

export const CardInfo = styled.div`
    flex: 1;
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    @media (min-width: 600px) {
        text-align: left;
    }
`

export const UserName = styled.p`
    margin: 0;
    font-size: clamp(1.05rem, 2.8vw, 1.25rem);
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.3;
    word-break: break-word;
`

export const FieldRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media (min-width: 480px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 6px 10px;
    }
`

export const FieldLabel = styled.span`
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #5a6570;
    flex-shrink: 0;
`

export const FieldValue = styled.span`
    font-size: 0.95rem;
    color: #2c333d;
    word-break: break-word;
`

export const DeleteAction = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transition: background 0.15s ease, transform 0.15s ease;

    &:hover {
        background: rgba(112, 4, 4, 0.12);
    }

    &:active {
        transform: scale(0.96);
    }

    img {
        width: 20px;
        height: 20px;
        pointer-events: none;
    }
`

export const EmptyState = styled.p`
    margin: 32px 16px;
    text-align: center;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.5;
`

export const LoadingState = styled.p`
    margin: 40px 16px;
    text-align: center;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
`

export const FooterActions = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 880px;
    padding: 12px 8px 0;
    flex-shrink: 0;

    button {
        width: min(320px, 100%) !important;
    }
`

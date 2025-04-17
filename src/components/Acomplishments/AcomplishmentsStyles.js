import styled from 'styled-components';

/* Container: 3 columns by default */
export const Boxes = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 24px 0 40px;

    @media ${props => props.theme.breakpoints.md} {
        /* auto‑fit smaller cards on medium */
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 16px;
        margin: 20px 0 32px;
    }

    @media ${props => props.theme.breakpoints.sm} {
        /* 2 columns on small */
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        max-width: 500px;
        margin: 24px auto;
    }
`;

/* Each card */
export const Box = styled.div`
    position: relative;       /* for the top‑right icon and modal */
    background: #212D45;
    border-radius: 12px;
    padding: 24px;
    transition: background 0.3s ease;

    &:hover {
        background: ${({ alt }) =>
                alt
                        ? 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'
                        : 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'};
    }
`;

/* Issuer title */
export const BoxNum = styled.h5`
    margin: 0 0 8px;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.01em;
    color: #FFFFFF;

    @media ${props => props.theme.breakpoints.md} {
        font-size: 28px;
        line-height: 32px;
    }
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 24px;
        line-height: 26px;
    }
`;

/* Certification title */
export const BoxText = styled.p`
    margin: 0;
    font-style: italic;
    padding-top: 8px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.75);

    @media ${props => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 20px;
    }
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 14px;
        line-height: 18px;
    }
`;

/* Logo in top‑right corner */
export const BoxIcon = styled.img`
    position: absolute;
    top: 24px;
    right: 24px;
    width: 60px;
    height: 60px;
    object-fit: contain;
`;

/* Full‑screen dark overlay */
export const ModalOverlay = styled.div`
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80vw;
    height: 80vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

/* Centered, responsive modal box */
export const ModalContent = styled.div`
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    width: 90vw;
    height: 90vh;
    overflow: auto;

    transition:
            width 4.3s ease,
            height 4.3s ease,
            transform 1.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

import styled from 'styled-components';

export const Wrapper = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
    justify-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 96px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        grid-gap: 24px;
        margin-top: 48px;
    }
`;

export const Header = styled.header`
    font-size: 24px;
    font-weight: 700;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 17px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    margin: 0px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 16px;
    }
`;
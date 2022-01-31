import styled from 'styled-components';

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 600px;
`;

export const Header = styled.header`
    margin: 0px 0px 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        margin-bottom: 12px;
    }
`;

export const Title = styled.h3`
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 18px;
    }
`;

export const Text = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0px 0px 56px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        margin-bottom: 40px;
    }
`;
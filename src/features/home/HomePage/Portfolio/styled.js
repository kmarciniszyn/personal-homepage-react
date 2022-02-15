import styled from 'styled-components';

export const Wrapper = styled.section`
    display: grid;
    grid-column-gap: 1fr;
    grid-row-gap: 12px;
    justify-items: center;
`;

export const Header = styled.header`
    text-align: center;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 30px;
    font-weight: 700;
    margin: 0px 0px 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 18px;
    }
`;

export const SubTitle = styled.h3`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 18px;
    font-weight: 400;
    margin: 0px;
`;
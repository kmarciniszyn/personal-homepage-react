import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(5, auto);
    grid-column-gap: 70px;
    grid-row-gap: 32px;
    justify-items: start;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        grid-template-columns: 1fr;
        grid-row-gap: 16px;
    }
`;

export const ModeWrapper = styled.div`
    justify-self: end;
`;

export const Image = styled.img`
    grid-row: 1 / 6;
    grid-column: 1 / 2;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 50%;
    justify-self: left;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        max-width: 200px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-size: 38px;
    font-weight: 900;
    margin: 0px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 22px;
    }
`;

export const Text = styled.p`
    font-size: 20px;
    color: ${({theme})=>theme.colors.gray};    
    margin: 0px 0px;

    @media (max-width: ${({theme})=>theme.breakpoints.maxMobileWidth}px){
        font-size: 17px;
    }
`;
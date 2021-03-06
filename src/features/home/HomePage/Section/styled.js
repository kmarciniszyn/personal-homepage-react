import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 32px;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: ${({theme}) => theme.boxShadow};
    transition: background-color 0.5s;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        grid-row-gap: 16px;
        padding: 16px;
    }
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
`;

export const Title = styled.h2`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0px 0px 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px) {
        font-size: 18px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 8px;
    list-style-position: inside;
    padding: 0px;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    font-size: 18px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 14px;
    }

    &::marker {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
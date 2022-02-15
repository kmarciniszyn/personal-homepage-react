import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    list-style: none;
    padding: 0px;
    margin: 96px 0px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        grid-template-columns: 1fr;
        grid-gap: 24px;
        margin-top: 48px;
    }
`;

export const Card = styled.li`
    padding: 56px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: 6px solid ${({ theme }) => theme.colors.card.border};
    transition: border 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        grid-row-gap: 12px;
        padding: 24px;
    }

    &:hover {
        border: 6px solid ${({ theme }) => theme.colors.card.hoverBorder};
    }    
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.card.header};
    font-size: 24px;
    font-weight: 700; 
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 16px;    
    };
`;

export const Paragraph = styled.p`
    font-size: 18px;
    margin: 24px 0px 0px;
    text-align: justify;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 14px;
        margin: 12px 0px 0px;    
    };
`;

export const LinksWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 8px;
    margin: 24px 0px 0px;
    font-size: 18px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 14px;
        margin: 12px 0px 0px;    
    };
`;

export const LinkRow = styled.dl`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinkValue = styled.dd`
    margin: 0px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
        filter: brightness(120%);
    }
`;
import styled from "styled-components";

export const StyledLinkButton = styled.a`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.linkButton.text};
    border: 1px solid ${({theme}) => theme.colors.linkButton.border};
    border-radius: 4px;
    padding: 12px 16px;
    font-size: 20px;
    transition: background-color 0.5s;
    text-decoration: none;

    @media (max-width: ${({theme}) => theme.breakpoints.maxMobileWidth}px){
        font-size: 18px;
    }

    &:hover {
        box-shadow: ${({theme}) => theme.colors.linkButton.hoverShadow};
    }
`;
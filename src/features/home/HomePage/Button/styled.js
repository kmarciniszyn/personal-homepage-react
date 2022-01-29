import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.iron};
    border-radius: 4px;
    padding: 12px 16px;
    font-size: 20px;
    transition: background-color 0.5s;

    @media (max-width: ${({theme}) => theme.breakpoints.maxMobileWidth}px){
        font-size: 18px;
    }

    &:hover {
        background-color: ${({theme}) => theme.colors.lightBlue};
    }
`;
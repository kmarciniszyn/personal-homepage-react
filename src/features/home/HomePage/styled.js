import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1220px;
    margin: 0 auto;
    padding: 14px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 70px;

    @media (max-width: ${({theme}) => theme.breakpoints.maxMobileWidth}px){
        grid-row-gap: 50px;
    }
`;
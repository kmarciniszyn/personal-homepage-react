import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { ReactComponent as Spinner } from './spinner.svg';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledSpinner = styled(Spinner)`
    color: ${({ theme }) => theme.colors.primary}; 
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ${rotate};

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        width: 60px;
        height: 60px;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 48px;
    margin-top: 88px;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
    font-size: 20px;


    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){  
        grid-gap: 24px;
        margin-top: 32px;
        font-size: 17px;
    }
`;

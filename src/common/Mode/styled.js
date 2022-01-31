import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    align-items: center;
    grid-column-gap: 12px;
    grid-template-columns: repeat(3, auto);
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;    
`;

export const CheckboxContainer = styled.div`
    margin: 5px;
    width: 46px;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.mode.background};
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.mode.border};
`;

export const CheckboxLabel = styled.label`
    cursor: pointer;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 2px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.mode.iconBackground};
    transition: transform 0.5s;

    ${({ checked }) => checked && css`
        transform: translateX(100%);
    `}
`;
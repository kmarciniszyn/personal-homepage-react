import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 2px;

    & svg {
        width: 16px;
        height: 16px;
        stroke: ${({ theme }) => theme.colors.white};
    }
`;
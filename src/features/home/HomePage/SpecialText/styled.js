import styled from 'styled-components';

export const Text = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
    margin-bottom: 12px;
`;
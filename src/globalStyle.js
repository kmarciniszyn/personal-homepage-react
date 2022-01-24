import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.colors.whiteLilac};
        font-family: 'Inter', sans-serif;
    }
`;
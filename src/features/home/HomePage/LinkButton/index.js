import React from "react";
import { StyledLinkButton } from "./styled";

export default ({ text, href }) => (
    <StyledLinkButton href={href}>
        {text}
    </StyledLinkButton>
);
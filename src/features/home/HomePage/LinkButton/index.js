import React from "react";
import { StyledLinkButton } from "./styled";

export default ({ text, href, title }) => (
    <StyledLinkButton href={href} title={title}>
        {text}
    </StyledLinkButton>
);
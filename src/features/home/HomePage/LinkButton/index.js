import React from "react";
import { StyledLinkButton } from "./styled";

export default ({ text, url }) => (
    <StyledLinkButton href={url}>
        {text}
    </StyledLinkButton>
);
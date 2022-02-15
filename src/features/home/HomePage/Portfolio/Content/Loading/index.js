import React from "react";
import { StyledSpinner, Wrapper } from "./styled";

export default () => (
    <Wrapper>
        Please wait, projects are being loaded...
        <StyledSpinner />
    </Wrapper>
);
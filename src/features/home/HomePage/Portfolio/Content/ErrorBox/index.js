import React from "react";
import Button from "../../../Button";
import AttentionIcon from './AttentionIcon';
import { Wrapper, Header, Paragraph } from "./styled";

export default () => (
    <Wrapper>
        <AttentionIcon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </Paragraph>
        <Button
            text={"Go to Github"}
        />
    </Wrapper>
);
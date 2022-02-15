import React from "react";
import LinkButton from "../../../LinkButton";
import AttentionIcon from './AttentionIcon';
import { Wrapper, Header, Paragraph } from "./styled";
import { userName } from "../../../../../../githubUserName";

export default () => (
    <Wrapper>
        <AttentionIcon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </Paragraph>
        <LinkButton
            text={"Go to Github"}
            href={`https://github.com/${userName}`}
        />
    </Wrapper>
);
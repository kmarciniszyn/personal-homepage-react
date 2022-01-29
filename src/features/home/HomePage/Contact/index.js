import React from "react";
import { Header, Text, Title, Wrapper } from "./styled";
import SpecialText from "../SpecialText";

export default () => (
    <Wrapper>
        <Header>
            <SpecialText content={"let's talk"} />
            <Title>marciniszyn.karolina@gmail.com</Title>
        </Header>
        <Text>
            I'm eager to take on new challenges.
            If you would like me to take part in your project,
            please email me.
            I'll be sure to contact you. 📧
        </Text>
    </Wrapper>
);
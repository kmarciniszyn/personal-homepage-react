import React from 'react';
import Button from "../Button";
import { Image, ModeWrapper, Title, Wrapper, Text } from './styled';
import SpecialText from '../../../../common/SpecialText';
import photo from '../../../../km.jpg';
import Mode from '../../../../common/Mode';

export default () => (
    <Wrapper>
        <Image
            src={photo}
            alt={"Karolina Marciniszyn"}
        />
        <ModeWrapper>
            <Mode />
        </ModeWrapper>
        <header>
            <SpecialText content={"this is"} />
            <Title>
                Karolina Marciniszyn
            </Title>
        </header>
        <Text>
            Hi! I'm a frontend developer.
            I enjoy learning new skills.
            Programming is my passion and
            gives me a lot of satisfaction.
        </Text>
        <Button text={"✉ Hire me"} />
    </Wrapper>
);
import React from 'react';
import { Image, ModeWrapper, Title, Wrapper, Text } from './styled';
import SpecialText from '../../../../common/SpecialText';
import photo from '../../../../km.jpg';
import Mode from '../../../../common/Mode';
import LinkButton from '../LinkButton';
import { email } from '../../../../email';

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
        <LinkButton
            href={`mailto:${email}`}
            text={"✉ Hire me"}
            title={email}
        />
    </Wrapper>
);
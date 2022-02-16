import React from "react";
import Contact from "./Contact";
import MainSection from "./MainSection";
import Portfolio from "./Portfolio";
import Section from "./Section";
import { Wrapper } from "./styled";
import { skills, otherSkills, learnNext } from "./skillsData";

export default () => (
    <Wrapper>
        <MainSection />
        <Section
            title={"My skillset includes"}
            content={skills}
        />
        <Section
            title={"My other skills"}
            content={otherSkills}
        />
        <Section
            title={"What I want to learn next"}
            content={learnNext}
        />
        <Portfolio />
        <Contact />
    </Wrapper>
);
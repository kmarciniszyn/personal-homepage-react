import React from "react";
import Section from "./Section";
import { Wrapper } from "./styled";

export default () => (
    <Wrapper>
        <Section
            title={"My skillset includes"}
            content={["Teamwork", "Trello", "Git", "Responsive Web Design",
                "Immutability", "Markdown", "Working with API (fetch, axios)",
                "Promises, Async/Await", "React", "React Hooks", "React Router",
                "Redux (Toolkit)", "Redux-Saga", "Styled components",
                "CSS BEM convention", "CSS Grid", "CSS Flexbos", "Error handling"]}
        />
        <Section
            title={"My other skills"}
            content={["NoSQL - Firebase", "Kotlin basics", "Python basics"]}
        />
        <Section
            title={"What I want to learn next"}
            content={["TypeScript", "Unit testing", "Node.js"]}
        />
    </Wrapper>
);
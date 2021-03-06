import React from "react";
import { ListItem, List, Title, Wrapper, Header } from "./styled";

export default ({ title, content }) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
        </Header>
        <List>
            {
                content.map(item =>
                    <ListItem key={item}>
                        {item}
                    </ListItem>)
            }
        </List>
    </Wrapper>
);
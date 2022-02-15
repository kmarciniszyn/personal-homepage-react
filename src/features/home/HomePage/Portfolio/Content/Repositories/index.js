import React from "react";
import { List, Card, Title, Paragraph, LinksWrapper, Link, LinkValue, LinkRow } from "./styled";

export default ({ repositories }) => (
    <List>
        {
            repositories.map(({ id, name, description, homepage, html_url }) => (
                <Card key={id}>
                    <Title>{name}</Title>
                    <Paragraph>
                        {description}
                    </Paragraph>
                    <LinksWrapper>
                        {!!homepage && (
                            <LinkRow>
                                <dt>
                                    Demo:
                                </dt>
                                <LinkValue>
                                    <Link href={homepage}>
                                        {homepage}
                                    </Link>
                                </LinkValue>
                            </LinkRow>
                        )}
                        <LinkRow>
                            <dt>
                                Code:
                            </dt>
                            <LinkValue>
                                <Link href={html_url}>
                                    {html_url}
                                </Link>
                            </LinkValue>
                        </LinkRow>
                    </LinksWrapper>
                </Card>
            ))
        }
    </List>
);
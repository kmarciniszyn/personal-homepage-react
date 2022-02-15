import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRepositoriesLoadingStatus, selectRepositories, fetchRepositories } from "../../homeSlice";
import { Wrapper, Title, SubTitle, Header } from "./styled";
import { userName } from '../../../../githubUserName';
import Content from "./Content";

export default () => {
    const dispatch = useDispatch();
    const repositories = useSelector(selectRepositories);
    const repositoriesLoadingStatus = useSelector(selectRepositoriesLoadingStatus);

    useEffect(() => {
        dispatch(fetchRepositories(userName));
    }, [dispatch]);

    return (
        <Wrapper>
            <Header>
                <Title>
                    Portfolio
                </Title>
                <SubTitle>
                    My recent projects
                </SubTitle>
            </Header>
            <Content
                repositoriesLoadingStatus={repositoriesLoadingStatus}
                repositories={repositories}
            />
        </Wrapper>
    );
};
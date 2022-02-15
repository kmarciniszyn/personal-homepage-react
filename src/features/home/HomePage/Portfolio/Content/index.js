import React from "react";
import ErrorBox from "./ErrorBox";
import Loading from "./Loading";
import Repositories from "./Repositories";

export default ({ repositoriesLoadingStatus, repositories }) => {

    switch (repositoriesLoadingStatus) {
        case "initial":
            return null;

        case "success":
            return <Repositories repositories={repositories} />;

        case "loading":
            return <Loading />;

        case "error":
            return <ErrorBox />;

        default:
            throw new Error(`incorrect status ${repositoriesLoadingStatus}`);
    }
};
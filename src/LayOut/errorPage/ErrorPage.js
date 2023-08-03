import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            Oops!!!
            <p>{error.statusText || error.message}</p>
        </>
    )
}

export default ErrorPage
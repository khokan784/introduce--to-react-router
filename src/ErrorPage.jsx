import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>oops!!!</h2>
        </div>
    );
};

export default ErrorPage;
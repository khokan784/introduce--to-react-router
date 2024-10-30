import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user
    return (
        <div>
            <h2>Details about user name: {name}</h2>
            <h3>website: {website}</h3>
        </div>
    );
};

export default UserDetails;
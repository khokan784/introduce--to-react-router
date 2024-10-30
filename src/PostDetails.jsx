import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>post details about:{id}</h3>
            <p>title:{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>GoBack</button>
        </div>
    );
};

export default PostDetails;
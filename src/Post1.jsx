import { Link, useNavigate } from "react-router-dom";

const Post1 = ({post1}) => {
    const {id, title} = post1;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    const handleDetail = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Post of id: {id}</h2>
            <p>post of title: {title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
            <button onClick={handleDetail}>Click to show detail</button>
        </div>
    );
};

export default Post1;
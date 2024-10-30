import { useLoaderData } from "react-router-dom";
import Post1 from "./Post1";

const Post = () => {
    const post = useLoaderData();
    return (
        <div>
            <h2>post: {post.length}</h2>
            <div className="users">
                {
                    post.map(post1 => <Post1 key={post1.id} post1={post1}></Post1>)
                }
            </div>
        </div>
    );
};

export default Post;
import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, email, name, phone} = user;
    const userStyle = {
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>name: {name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>User Detail</Link>
            <Link to={`/user/${id}`}>
                <button>Click me</button>
            </Link>
        </div>
    );
};

export default User;
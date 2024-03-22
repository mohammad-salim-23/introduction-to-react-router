
import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {
    // console.log(post);
    
  const {id,title,body} = post;
  const navigate = useNavigate();
  const postStyle = {
    border: '2px solid yellow',
    padding:'5px',
    borderRadius:'10px'
}
const handleShowDetails= ()=>{
       navigate(`/post/${id}`);
}
    return (
        <div style={postStyle}>
            <h2>{id}</h2>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click here</button></Link>
            <button onClick={handleShowDetails}>Click to See Details</button>
        </div>
    );
};

export default Post;
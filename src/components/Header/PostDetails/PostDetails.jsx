 import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
     const post = useLoaderData();
     const navigate = useNavigate();
     const {id,title,body} = post;
     const handleGoBack= ()=>{
        navigate(-1);
     }
     const {postId} = useParams();
     console.log(postId);
     
    return (
        <div>
            <h1>Post Details about:{id}</h1>
            <p>Title:{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );

    };
export default PostDetails;
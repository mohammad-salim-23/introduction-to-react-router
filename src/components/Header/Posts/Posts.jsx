import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData();
    return (
              <div>
           <h1>Post here:</h1> 
          <div className="user">
          {
            posts.map((post)=><Post key={post.id} post={post}></Post> )
           }
          </div>
        </div>
    );
};

export default Posts;
import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
   const user = useLoaderData();
   console.log(user)
   const {name,website} = user;
    return (  
        <div>
            <h1>Details About User:{name}</h1>
            <p>{website}</p>
          
        </div>
    );
};

export default UserDetails;
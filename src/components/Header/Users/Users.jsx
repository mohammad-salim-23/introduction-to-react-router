import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
             <h1 className="text-2xl">Our Users</h1>
             <h3>Users: {users.length}</h3>
             <div className="user">
                {
                    users.map((user,idx)=><User key={idx} user={user} ></User>)
                }
             </div>
        </div>
    );
};

export default Users;

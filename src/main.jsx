import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Header/Home/Home.jsx';
import About from './components/Header/About/About.jsx';
import Contact from './components/Header/Contact/Contact.jsx';
import Users from './components/Header/Users/Users.jsx';
import UserDetails from './components/Header/UserDetails/UserDetails.jsx';
import Posts from './components/Header/Posts/Posts.jsx';
import PostDetails from './components/Header/PostDetails/PostDetails.jsx';
import ErrorPage from './components/Header/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
      
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path:'/user/:userId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   
  <RouterProvider router={router} />
</React.StrictMode>
)

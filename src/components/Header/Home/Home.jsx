import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state==="loading"?<p className="loading">Loading</p>:
                <Outlet></Outlet>
            }
          <h1>Salim vai</h1> 

          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Home;
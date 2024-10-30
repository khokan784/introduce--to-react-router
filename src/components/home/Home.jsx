import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../../Footer";

const Home = () => {
    const navigation = useNavigation();
    console.log(navigation);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <h2>loading....</h2>:<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;
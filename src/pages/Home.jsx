import {useNavigate} from "react-router-dom";
import "./Home.css";


//2 areas of the page, one half leads to ocean game, the other leads to the space games
const Home = () => {
    const navigate = useNavigate();

    return (
        <div id={"home-container"}>
            <div id={"ocean"}>
                <button onClick={() => {navigate("/ocean")}}>OCEAN GAME</button>
            </div>
            <div id={"space"}>
                <button onClick={() => {navigate("/space")}}>SPACE GAME</button>
            </div>
        </div>
    )
}

export default Home;
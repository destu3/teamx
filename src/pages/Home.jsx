import {useNavigate} from "react-router-dom";
import "./Home.css";

import HomeIcon from "../components/HomeIcon";
import oceanImg from "../resources/ocean.jpg";
import spaceImg from "../resources/sky.jpg";

//2 areas of the page, one half leads to ocean game, the other leads to the space games
const Home = () => {
    const navigate = useNavigate();

    const oceanIcon = <HomeIcon navigateToPath={"/ocean"} name={"OCEAN GAME"} imgSrc={oceanImg}/>
    const spaceIcon = <HomeIcon navigateToPath={"/space"} name={"SPACE GAME"} imgSrc={spaceImg}/>
    //the empty element is a placeholder to display how multiple icons could be presented
    const empty = <HomeIcon navigateToPath={"/"} name={""} />
    //can add

    return (
        <div id={"home-container"}>
            <div id={"home-title"}>
                <h1 id={"home-title-1"}>Where do you want to</h1>
                <h1 id={"home-title-2"}>explore?</h1>
            </div>
            <div id={"icons-row-1"}>
                {oceanIcon}
                {spaceIcon}
                {empty}
                {empty}
            </div>
            <div id={"icons-row-2"}>
                {empty}
                {empty}
                {empty}
                {empty}
            </div>
        </div>
    )
}

export default Home;
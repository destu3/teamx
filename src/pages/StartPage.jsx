import {useNavigate} from 'react-router-dom';

import "../styles/StartPage.css";
//replace the image with the assistant image
import assistant from "../resources/mascot.png";


//start page is for introducing the virtual assistant and leading to the biomepage where the games can then be led to
const StartPage = () => {
    const navigate = useNavigate();


    return (
        <div id={"start-container"} onClick={() => navigate("/home")}>
            <img id={"assistant"} src={assistant} alt={assistant}/>
            <div id={"text-bubble"}>
                <h1>hello, its great to meet you!!</h1>
                <h1>click anywhere to continue.</h1>
            </div>
        </div>
    )
}

export default StartPage;
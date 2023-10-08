import {useNavigate} from "react-router-dom";
import './HomeIcon.css'

const HomeIcon = ({navigateToPath, imgSrc, backgroundColor, name}) => {
    const navigate = useNavigate();

    if (!imgSrc || !name){
        return (
            <>
                <div id={"icon-container"}></div>
            </>
        )
    }
    else{
        return (
            <>
                <div id={"icon-container"} onClick={() => {navigate(navigateToPath)}}>
                    <img id={"game-background"} src={imgSrc} alt={backgroundColor} />
                    <h1 id={"game-name"}>{name}</h1>
                </div>
            </>
        )
    }
}

export default HomeIcon;
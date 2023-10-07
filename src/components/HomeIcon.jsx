import {useNavigate} from "react-router-dom";
import './HomeIcon.css'

const HomeIcon = ({navigateToPath, imgSrc, name}) => {
    const navigate = useNavigate();

    return (
        <>
            <div id={"icon-container"}>
                <img id={"game-background"} src={imgSrc} alt={imgSrc} />
                <h1 id={"game-name"}>{name}</h1>
                <button onClick={() => {navigate(navigateToPath)}} />
            </div>
        </>
    )
}

export default HomeIcon;
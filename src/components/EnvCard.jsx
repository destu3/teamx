import { Link } from 'react-router-dom';
import '../styles/EnvCard.css';
import speakText from "./speakText";
import {useEffect, useState} from "react";

const EnvCard = ({ data, pni }) => {
  const { env, coverImage, sectionHeading } = data;

  const [isHover, SetIsHover] = useState(false);
    useEffect(() => {
        if (isHover) speakText(sectionHeading);
    },[isHover])

  return (
    <section aria-label={`${env}-section`} className="env-wrapper" onMouseEnter={() => SetIsHover(true)} onMouseLeave={() => SetIsHover(false)}>
      <Link
        to={"/" + env}
        style={{ backgroundImage: `url(${coverImage})` }}
        className={`env ${pni ? 'pni' : ''}`}
      >
        <h2 className="sect-heading">{sectionHeading.toUpperCase()}</h2>
      </Link>
    </section>
  );
};

export default EnvCard;

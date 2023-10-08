import { Link } from 'react-router-dom';
import '../styles/EnvCard.css';

const EnvCard = ({ data, pni }) => {
  const { env, coverImage, sectionHeading } = data;

  return (
    <section aria-label={`${env}-section`} className="env-wrapper">
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

import { Link } from 'react-router';
import './SkinCardImage.css';

const SkinCardImage = ({ skin }) => {
  return(
    <section className="weapon-image">
      <Link to={`/skins/${skin._id}`}> 
        <img src={skin.weapon.image}
          className="index-image"
          alt="index image">
        </img>
      </Link>
    </section>
  );
};

export default SkinCardImage;
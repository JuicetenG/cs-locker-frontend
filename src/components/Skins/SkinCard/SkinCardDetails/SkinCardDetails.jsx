import { Link } from 'react-router';

const SkinCardDetails = ({ skin }) => {
  return (
    <>
      <section className="weapon-details">
        <p>{skin.weapon.name} ${skin.price}</p>
        ({skin.wearLevel})
      </section>
      <Link to={`/skins/user/${skin.owner._id}`}>
        <button>Visit {skin.owner.username}'s profile</button>
      </Link>
    </>
  );
};

export default SkinCardDetails;
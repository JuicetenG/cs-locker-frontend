import { Link } from 'react-router';

const SkinCard = ({ skin }) => {
  return(
    <div className='weapon-card'>
      <Link  to={`/skins/${skin._id}`}>
        <section className='weapon-image'>
          <img src={skin.weapon.image}
            className='index-image'
            alt='index image'>
          </img>
        </section>
      </Link>
      <section className="weapon-details">
        <p>{skin.weapon.name} ${skin.price}</p>
          ({skin.wearLevel})
      </section>
      <Link to={`/skins/user/${skin.owner._id}`}>
        <button>Visit {skin.owner.username}'s profile</button>
      </Link>
    </div>
  );
}

export default SkinCard;
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router';
import * as skinsService from '../../services/skinsService';

const SkinsIndex = () => {
  const { user } = useContext(UserContext);
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    const fetchAllSkins = async () => {
      const skinsData = await skinsService.index();
      setSkins(skinsData);
    };
    if(user) fetchAllSkins();
  }, [user]);

  
  return (
    <ul>
      {skins.map((skin) => (
        <li key={skin._id}>
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
        </li>
      ))}
    </ul>
  );
};

export default SkinsIndex;
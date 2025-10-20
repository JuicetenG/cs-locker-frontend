import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import SkinCardImage from '../SkinCard/SkinCardImage/SkinCardImage';
import SkinCardDetails from '../SkinCard/SkinCardDetails/SkinCardDetails'
import * as skinsService from '../../../services/skinsService';

const SkinsIndex = () => {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    const fetchAllSkins = async () => {
      const skinsData = await skinsService.index();
      setSkins(skinsData);
    };
    fetchAllSkins();
  }, []);

  return (
    <ul>
      {skins.map((skin) => (
        <li key={skin._id}>
          <Link to={`/skins/${skin._id}`}>
            <SkinCardImage skin={skin} />
            <SkinCardDetails skin={skin} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SkinsIndex;
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import SkinCardImage from '../SkinCard/SkinCardImage/SkinCardImage';
import SkinCardDetails from '../SkinCard/SkinCardDetails/SkinCardDetails'
import { index } from '../../../services/skinsService';
import './SkinsIndex.css';

const SkinsIndex = () => {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    const fetchAllSkins = async () => {
      const skinsData = await index();
      setSkins(skinsData);
    };
    fetchAllSkins();
  }, []);

  return (
    <ul className="skins-wrapper">
      {skins.map((skin) => (
        <li className="skin-box" key={skin._id}>
          {/* <Link to={`/skins/${skin._id}`}> */}
            <SkinCardImage skin={skin} />
            <SkinCardDetails skin={skin} />
          {/* </Link> */}
        </li>
      ))}
    </ul>
  );
};

export default SkinsIndex;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SkinCardImage from '../SkinCard/SkinCardImage/SkinCardImage';
import SkinCardDetails from '../SkinCard/SkinCardDetails/SkinCardDetails'
import { indexUser } from '../../../services/skinsService';
import '../SkinsIndex/SkinsIndex.css';

const SkinsIndexUser = () => {
  const { userId } = useParams();
  const [userSkins, setUserSkins] = useState([]);

  useEffect(() => {
    const fetchUserSkins = async () => {
      const skinsData = await indexUser(userId);
      setUserSkins(skinsData);
    };
    fetchUserSkins();
  }, [userId]);

  console.log(userSkins);

  return (
    <ul className="skins-wrapper">
      {userSkins.map((skin) => (
        <li className="skin-box" key={skin._id}>
          <SkinCardImage skin={skin} />
          <SkinCardDetails skin={skin} />
        </li>
      ))}
    </ul>
  );
};

export default SkinsIndexUser;
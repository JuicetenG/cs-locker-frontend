import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import SkinCard from '../SkinCard/SkinCard';
import * as skinsService from '../../../services/skinsService';

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

          <SkinCard skin={skin} />
        </li>
      ))}
    </ul>
  );
};

export default SkinsIndex;
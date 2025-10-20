import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import SkinCardDetails from '../SkinCard/SkinCardDetails/SkinCardDetails';
import * as skinsService from '../../../services/skinsService';
import SkinCardImage from '../SkinCard/SkinCardImage/SkinCardImage';

const SkinDetails = () => {
  const { skinId } = useParams();
  const [skin, setSkin] = useState(null);

  useEffect(() => {
    const fetchSkin = async () => {
      const skinData = await skinsService.show(skinId);
      setSkin(skinData);
    };
    fetchSkin(); 
  }, [skinId]);

  if(!skin) return <>Loading...</>

  return (
    <>
      <SkinCardImage skin={skin} />
      <SkinCardDetails skin={skin} />
    </>
  )
};

export default SkinDetails;
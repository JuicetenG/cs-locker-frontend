import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import SkinCardDetails from '../SkinCard/SkinCardDetails/SkinCardDetails';
import * as skinsService from '../../../services/skinsService';
import SkinCardImage from '../SkinCard/SkinCardImage/SkinCardImage';
import './SkinDetails.css';

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
    <div className="details-wrapper">
      <SkinCardImage skin={skin} />
      <SkinCardDetails skin={skin} />
      <button>delete</button>
    </div>
  )
};

export default SkinDetails;
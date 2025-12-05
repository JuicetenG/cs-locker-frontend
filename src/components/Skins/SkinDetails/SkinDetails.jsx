import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import SkinCardDetails from '../SkinCard/SkinCardDetails/SkinCardDetails';
import * as skinsService from '../../../services/skinsService';
import SkinCardImage from '../SkinCard/SkinCardImage/SkinCardImage';
import './SkinDetails.css';
import { UserContext } from '../../../contexts/UserContext';

const SkinDetails = () => {
  const { skinId } = useParams();
  const [skin, setSkin] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchSkin = async () => {
      const skinData = await skinsService.show(skinId);
      setSkin(skinData);
    };
    fetchSkin(); 
  }, [skinId]);

  const deleteSkin = async () => {
    try {
      await skinsService.deleteSkin(skinId);
      navigate('/skins');
    } catch (err) {
      console.error('Failed to delete skin: ', err);
    }
  }

  console.log(skin, user);

  if(!skin) return <>Loading...</>

  return (
    <div className="details-wrapper">
      <SkinCardImage skin={skin} />
      <SkinCardDetails skin={skin} />
      {user._id === skin.owner._id && <button onClick={deleteSkin}>delete</button>}
    </div>
  )
};

export default SkinDetails;
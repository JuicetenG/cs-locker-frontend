import { indexAll } from '../../../services/skinsService';
import { useState, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { create } from '../../../services/skinsService';

const SkinForm = () => {
  const { user } = useContext(UserContext);
  const [ weapons, setWeapons ] = useState([]);
  const [ formData, setFormData ] = useState({
    weapon: '',
    price: 0,
    float: 0.5,
  });

  const addSkin = async (skinFormData) => {
    try {
      const newSkin = await create(skinFormData);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchWeapons = async () => {
      const weaponsData = await indexAll();
      setWeapons(weaponsData);
    };
    fetchWeapons();
  }, []);


  return (
    <main>
      yerrr
    </main>
  );
};

export default SkinForm;
import { indexAll } from '../../../services/skinsService';
import { useState, useEffect } from 'react';

const SkinForm = () => {
  const [weapons, setWeapons] = useState([]);

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
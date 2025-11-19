import { indexAll } from '../../../services/skinsService';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { create } from '../../../services/skinsService';

const initialState = {
  weapon: '',
  price: 0,
  float: 0.5,
};

const SkinForm = () => {
  const { user } = useContext(UserContext);
  const [ weapons, setWeapons ] = useState([]);

  const [ formData, setFormData ] = useState({
    weapon: '',
    price: 0,
    float: 0.5,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


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

  console.log(weapons);

  return (
    <div className="new-skin-form-wrapper">
      <form className="new-skin-form">
        <input type="text" id="weapon-search" placeholder="   search weapons..."></input>
        <label htmlFor="weapon-name">Weapon Name</label>
      </form>
    </div>
  );
};

export default SkinForm;
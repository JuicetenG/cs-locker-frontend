import { indexAll } from '../../../services/skinsService';
import { useState, useEffect, useContext } from 'react';
import { create } from '../../../services/skinsService';

const initialState = {
  weapon: '',
  price: 0,
  float: 0.5,
};

const SkinForm = () => {
  const [ weapons, setWeapons ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ formData, setFormData ] = useState({
    weapon: '',
    price: 0,
    float: 0.5,
  });

  useEffect(() => {
    const fetchWeapons = async () => {
      const weaponsData = await indexAll();
      setWeapons(weaponsData.sort((a, b) => a.name.localeCompare(b.name)));
    };
    fetchWeapons();
  }, []);

  console.log(weapons);
  const safeSearch = search?.toLowerCase() || '';
  const filteredWeapons = weapons
    .filter((w) => w.name.toLowerCase().includes(safeSearch))
    .sort((a, b) => a.name.localeCompare(b.name));

  console.log("filtered" + filteredWeapons);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'float' ? parseFloat(value) :
              name === 'price' ? Number(value) :
              value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await create(formData);
      console.log('Skin created:', formData);
      setFormData(initialState);
      setSearch('');
    } catch (err) {
      console.error('Failed to create skin:', err);
    }
  };

  return (
    <div className="new-skin-form-wrapper">
      <form 
        className="new-skin-form"
        onSubmit={handleSubmit}>

        <input
          type="text" 
          id="weaponSearch" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="   search weapons..."
        />
        <select
          id="weaponSelect"
          value={formData.weapon}
          name="weapon"
          onChange={handleChange}
        >
          {filteredWeapons.length > 0 && (
            <option value={filteredWeapons[0].name} hidden selected>
              {filteredWeapons[0].name}
            </option>
          )}
          {filteredWeapons.map((w) => (
            <option key={w._id} value={w.name}>
              {w.name}
            </option>
          ))}
        </select>

        <label htmlFor="floatSlider">
          Float: {formData.float.toFixed(2)}
        </label>
        <input
          id="floatSlider"
          name="float"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={formData.float}
          onChange={handleChange}
        />

        <label htmlFor="priceInput">Price:</label>
        <input
          id="priceInput"
          name="price"
          type="text"
          value={formData.price}
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
};

export default SkinForm;
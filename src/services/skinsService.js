const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/skins`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
    });
    return res.json();
  } catch(err) {
    console.log(err);
  }
};

const create = async (skinData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(skinData),
    });
    return res.json();
  } catch(err) {
    console.log(err);
  }
};

const show = async (skinId) => {
  try {
    const res = await fetch(`${BASE_URL}/${skinId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
    });
    return res.json();
  } catch(err) {
    console.log(err);
  }
};

const indexAll = async () => {
  try {
    const res = await fetch(`${BASE_URL}/weapons/data`, {
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
    });
    return res.json();
  } catch(err) {
    console.log(err);
  }
};

export {
  index,
  create,
  show,
  indexAll,
};
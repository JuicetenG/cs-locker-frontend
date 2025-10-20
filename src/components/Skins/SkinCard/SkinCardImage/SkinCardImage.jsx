const SkinCardImage = ({ skin }) => {
  return(
    <section className='weapon-image'>
      <img src={skin.weapon.image}
        className='index-image'
        alt='index image'>
      </img>
    </section>
  );
};

export default SkinCardImage;
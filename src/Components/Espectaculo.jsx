/* eslint-disable react/prop-types */
const Espectaculo = ({ espectaculo, setSelected }) => {
  return (
    <div>
      <img src={espectaculo.img} alt="" />
      <h2>{espectaculo.artista}</h2>
      <h3>${espectaculo.precio}</h3>
      <h4>{espectaculo.fecha}</h4>
      <button onClick={()=>setSelected(espectaculo)}>Comprar entrada</button>
    </div>
  );
};

export default Espectaculo;

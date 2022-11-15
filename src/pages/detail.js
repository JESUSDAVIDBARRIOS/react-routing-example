import { useParams } from "react-router-dom";

const { useEffect, useState } = require("react");

export default function Detail(props) {

  const params = useParams();
  
  const [mascota, setMascota] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMascota(data[params.mascotaId - 1]);
      });
  }, [params.mascotaId]);
  
  return (
    <div>
      <h1>{mascota.nombre}</h1>
      <img alt={"imagen_" + mascota.nombre} src={mascota.foto} className="img-fluid rounded" style={{height: "60vh"}} />
      <h5>{mascota.raza}</h5>
      <p>{mascota.descripcion}</p>
    </div>
  );
}

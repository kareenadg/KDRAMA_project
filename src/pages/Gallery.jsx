import { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [dramas, setDramas] = useState([]);

  const getDramas = async () => {
    const res = await fetch(
      `https://63ecf271be929df00cb5c6f7.mockapi.io/Kdramas`
    );
    const data = await res.json();
    setDramas(data);
  };

  useEffect(() => {
    getDramas();
  }, []);

  return (
    <main>
      {dramas.map((drama) => 
        (<figure key={drama.id}>
          <img src={drama.image} alt={drama.title} />
          <h3>{drama.title}</h3>
          <figcaption>{drama.year}</figcaption>
        </figure>
      ))}
    </main>
  );
};

export default Gallery;

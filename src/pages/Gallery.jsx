import { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [dramas, setDramas] = useState([]);
  const [filteredDrama, setFilteredDrama] = useState([]);

  useEffect(() => {
    fetch("https://63ecf271be929df00cb5c6f7.mockapi.io/Kdramas")
      .then((res) => res.json())
      .then((res) => {
        setDramas(res);
        setFilteredDrama(res);
      });
  }, []);

  const filterDrama = (keyword) => {
    const filter = dramas.filter((drama) => {
      drama.title.toLowerCase().includes(keyword.toLowerCase());
      drama.year.includes(keyword);
    });
    setFilteredDrama(filter);
  };

  return (
    <main>
      <div className="filters">
        <input type="text" onChange={(ev) => filterDrama(ev.target.value)} placeholder="Search..."/>
        <button onClick={() => setFilteredDrama(dramas)}>ALL</button>
        <button
          onClick={() => {
            const years = dramas.filter((drama) => drama.year < 2020);
            setFilteredDrama(years);
          }}
        >
          Before 2020
        </button>
        <button
          onClick={() => {
            const years = dramas.filter((drama) => drama.year >= 2020);
            setFilteredDrama(years);
          }}
        >
          After 2020
        </button>
      </div>
      {filteredDrama.map((drama) => (
        <figure key={drama.id}>
          <img src={drama.image} alt={drama.title} />
          <h3>{drama.title}</h3>
          <figcaption>{drama.year}</figcaption>
          <button>＋</button>
        </figure>
      ))}
    </main>
  );
};

export default Gallery;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./GalleryDetail.css"

const GalleryDetail = () => {
  const { id } = useParams();
  const [dramas, setDramas] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://63ecf271be929df00cb5c6f7.mockapi.io/Kdramas?id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDramas(res.filter((it) => it.id === id));
        console.log(res);
      });
  }, []);

  return (
    <main>
    <button onClick={() => navigate("/gallery")}>BACK</button>
      <div className="description" >
        {dramas.map((drama) => (
          <div key={drama.id}>
            <h3>{drama.title}</h3>
            <p>{drama.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryDetail;

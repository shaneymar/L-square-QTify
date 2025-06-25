import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);

 useEffect(() => {
  fetch(apiEndpoint)
    .then(res => res.json())
    .then(data => setAlbums(data))
    .catch(err => console.error("Error:", err));
}, [apiEndpoint]);


  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.toggleButton}>Collapse</button>
      </div>
      <div className={styles.grid}>
        {albums.map((album) => (
          <Card
            key={album.id}
            title={album.title}
            follows={album.follows}
            image={album.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;

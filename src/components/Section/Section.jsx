// src/components/Section/Section.jsx
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, fetchUrl }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(fetchUrl);
        if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
        const data = await res.json();
        setAlbums(data);
      } catch (err) {
        console.error("Error fetching albums:", err.message);
      }
    };

    fetchAlbums();
  }, [fetchUrl]);

  const visibleAlbums = showAll ? albums : albums.slice(0, 5);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {albums.length > 5 && (
          <button onClick={() => setShowAll(!showAll)} className={styles.toggle}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>
      <div className={styles.cardGrid}>
        {visibleAlbums.map((album) => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

export default Section;

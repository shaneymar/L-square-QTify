// src/components/Section/Section.jsx
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, fetchUrl }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(fetchUrl);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setAlbums(data);
      } catch (err) {
        console.error("Failed to fetch albums:", err);
      }
    };
    fetchAlbums();
  }, [fetchUrl]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {albums.length > 0 && (
          <button className={styles.toggle} onClick={() => setShowAll(!showAll)}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      <div className={styles.content}>
        {showAll ? (
          <Carousel data={albums} />
        ) : (
          <div className={styles.cardGrid}>
            {albums.map((album) => (
              <Card key={album.id} album={album} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;

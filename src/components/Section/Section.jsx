import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, fetchUrl }) {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(fetchUrl);
        if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const visibleItems = showAll ? items : items.slice(0, 5);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {items.length > 5 && (
          <button onClick={() => setShowAll(!showAll)} className={styles.toggle}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>
      <div className={styles.cardGrid}>
        {visibleItems.map((item) => (
          <Card key={item.id} album={item} />
        ))}
      </div>
    </div>
  );
}

export default Section;

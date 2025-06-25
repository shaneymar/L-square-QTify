import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ album }) {
  const { title, image, follows } = album;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.chipWrapper}>
          <Chip
            label={`${follows || 0} Follows`}
            size="small"
            sx={{
              backgroundColor: "#000000",
              color: "#ffffff",
              fontWeight: 500,
              fontSize: "14px",
              boxShadow: 1,
              height: "32px",
              margin: "8px 4px",
              borderRadius: "24px",
            }}
          />
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Card;

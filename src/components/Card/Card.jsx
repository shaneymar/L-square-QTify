import React from "react";
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';

function Card({title,image,follows}){
    return(
     <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <Chip
          label={`${follows} Follows`}
          className={styles.chip}
          size="small"
        />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
    )
}

export default Card;
import { useCallback } from "react";
import styles from "./styles.module.css";

const Card = ({ setId, Id, CoverImage }) => {
  const setItem = useCallback(
    (id) => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("id", Id);
      }
      setId(id);
    },
    [setId, Id]
  );

  return (
    <div key={Id} className={styles.movie} onClick={() => setItem(Id)}>
      <img src={CoverImage} className={styles.img} alt="movie" />
    </div>
  );
};

export default Card;

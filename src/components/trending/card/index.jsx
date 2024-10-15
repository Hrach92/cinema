import { useCallback } from "react";
import styles from "./styles.module.css";

const Card = ({ setId, movie }) => {
  const setItem = useCallback(
    (id) => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("item", JSON.stringify(movie));
      }
      setId(id);
    },
    [movie, setId]
  );

  const { Id, CoverImage } = movie;

  return (
    <div key={Id} className={styles.movie} onClick={() => setItem(Id)}>
      <img src={CoverImage} className={styles.img} alt="movie" />
    </div>
  );
};
export default Card;

import { useCallback } from "react";
import { movies } from "../../../instance/data";
import styles from "./styles.module.css";

const Trending = ({ setId }) => {
  const { trendingNow } = movies;

  const setItem = useCallback(() => {
    if (typeof window !== "undefined") {
      this.storage = type === "local" ? localStorage : sessionStorage;
    }
  }, []);
  return (
    <div className={styles.container}>
      {trendingNow.map(({ Id, CoverImage }) => {
        return (
          <div key={Id} className={styles.movie} onClick={() => setId(Id)}>
            <img src={CoverImage} className={styles.img} alt="movie" />
          </div>
        );
      })}
    </div>
  );
};
export default Trending;

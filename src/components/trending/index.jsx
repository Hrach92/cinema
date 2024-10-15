import { Fragment } from "react";
import { movies } from "../../instance/data";
import styles from "./styles.module.css";
import Card from "./card";

const Trending = ({ setId }) => {
  const { trendingNow } = movies;

  return (
    <div className={styles.container}>
      {trendingNow.map((movie) => {
        return (
          <Fragment key={movie.Id}>
            <Card movie={movie} setId={setId} />
          </Fragment>
        );
      })}
    </div>
  );
};
export default Trending;

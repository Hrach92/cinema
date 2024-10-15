import { useState } from "react";
import mainImage from "../../assets/images/mainImage.png";
import { formatTime } from "../../instance/data";
import styles from "./styles.module.css";
import classNames from "classnames";
import play from "../../assets/icons/play.png";

const Movie = ({ movie }) => {
  const [more, setMore] = useState(false);

  const { ReleaseYear, MpaRating, Title, Category, Duration } = movie;
  const time = formatTime(Duration);

  return (
    <div className={styles.container}>
      <img src={mainImage} alt="Main" className={styles.img} />
      <div className={styles.movie}>
        <div className={styles.category}>{Category}</div>
        <div className={styles.title}>{Title}</div>
        <div className={styles.info}>
          <div>{ReleaseYear}</div>
          <div>{MpaRating}</div>
          <div>{time}</div>
        </div>
        <div className={styles.desc}>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, ${
            more ?
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book.":"..."
          }`}
        </div>
        <div className={styles.actions}>
          <button className={classNames(styles.btn, styles.play)}>
            <img src={play} alt="play" className={styles.playImg} />
            Play
          </button>
          <button
            className={classNames(styles.btn, styles.more)}
            onClick={() => setMore((prev) => !prev)}
          >
            {more ? "Less Info" : "More Info"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Movie;

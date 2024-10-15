import { useCallback, useState } from "react";
import mainImage from "../../assets/images/mainImage.png";
import { formatText, formatTime } from "../../instance/data";
import styles from "./styles.module.css";
import classNames from "classnames";
import play from "../../assets/icons/play.png";
import pause from "../../assets/icons/pause.png";

import video from "../../assets/videos/video.mp4";

const Movie = ({ movie }) => {
  const [show, setShow] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const { ReleaseYear, MpaRating, Title, Category, Duration, Description } =
    movie;

  const onPlay = useCallback(() => {
    setTimeout(() => {
      setPlayVideo((prev) => !prev);
    }, 2000);
  }, []);

  const time = formatTime(Duration);
  const desc = formatText(Description, show);
  const src = playVideo ? pause : play;

  return (
    <div className={styles.container}>
      {playVideo ? (
        <video autoPlay loop muted style={styles.video} src={video} />
      ) : (
        <img src={mainImage} alt="Main" className={styles.img} />
      )}

      <div className={styles.movie}>
        <div className={styles.category}>{Category}</div>
        <div className={styles.title}>{Title}</div>
        <div className={styles.info}>
          <div>{ReleaseYear}</div>
          <div>{MpaRating}</div>
          <div>{time}</div>
        </div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.actions}>
          <button
            className={classNames(styles.btn, styles.play)}
            onClick={onPlay}
          >
            <img src={src} alt="play" className={styles.playImg} />
            Play
          </button>
          <button
            className={classNames(styles.btn, styles.show)}
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? "Less Info" : "More Info"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Movie;

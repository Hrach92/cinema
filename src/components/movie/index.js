import mainImage from '../../assets/images/mainImage.png'
import styles from './styles.module.css'

const Movie = () => {
    return <div className={styles.container}>
        <img src={mainImage} alt="Main" className={styles.img} />
    </div>
}
export default Movie
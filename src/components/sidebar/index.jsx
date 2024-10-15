import styles from './styles.module.css'
import { icons } from '../../instance'
import { useCallback, useState } from 'react'
import classNames from 'classnames'

const Sidebar = () => {
    const [active, setActive] = useState('home')

    const chooseActivity = useCallback((alt) => {
        if (alt !== 'search') setActive(alt)
    }, [])

    return <div className={styles.sidebar}>
        <div className={styles.profile}>
            <div className={styles.avatar}></div>
            <div className={styles.name}>Name</div>
        </div>
        {icons.map(({ icon, alt, label, id }) => {
            const isActive = active === alt
            return <div key={id} className={classNames(styles.item, isActive && styles.activeItem)} onClick={() => chooseActivity(alt)}>
                <div className={styles.imgContainer}><img src={icon} alt={alt} className={styles.img} /></div>
                <div className={styles.label}>{label}</div>
            </div>
        })}
        <div className={styles.bottomActions}>
            <div>language</div>
            <div>get help</div>
            <div>exit</div>
        </div>
    </div>
}
export default Sidebar
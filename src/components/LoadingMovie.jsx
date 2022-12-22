import styles from './MoviesGrid.module.css'

export function LoadingMovie() {
  return (
    <div className={styles.newBody}>
        <svg className={styles.svg}>
            <circle className={styles.circle} cx="70" cy="70" r="70">hola</circle>
        </svg>
    </div>
  )
}

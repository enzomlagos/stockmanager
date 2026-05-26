import styles from './SearchBar.module.css';

export function SearchBar() {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input} type="text" placeholder="Buscar producto..." aria-label="Buscar producto" />
            <button className={styles.button}>Buscar</button>
        </div>
        /*Logica para manejar la busqueda */
    )
}
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Stock Manager</h1>
            <nav aria-label='Navegación principal'>
                <ul className={styles.nav}>
                    <li className={styles.navItem}><Link to="/">Home</Link></li>
                    <li className={styles.navItem}><Link to="/stock">Stock</Link></li>
                    <li className={styles.navItem}><Link to="/addProduct">Agregar Productos</Link></li>
                </ul>
            </nav>
        </header>
    )
}    

export default Header;
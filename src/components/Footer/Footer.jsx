import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>&copy; 2026 - Mi Aplicación React</p>
        </footer>
    )
}

export default Footer;
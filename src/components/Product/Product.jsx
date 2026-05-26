import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Product.module.css";

export function Product ({ id, precio, nombre, stock, imagen, detailPath }) {
    const [stockActual, setStockActual] = useState(stock);
    const [cantidad, setCantidad] = useState(1);
    const [modo, setModo] = useState('agregar');

    const maxCantidad = modo === 'retirar' ? stockActual : Infinity;

    const incrementar = () => {
        if (cantidad < maxCantidad) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const cambiarModo = (nuevoModo) => {
        setModo(nuevoModo);
        setCantidad(1);
    };

    const modificarStock = () => {
        if (modo === 'agregar') {
            setStockActual(stockActual + cantidad);
        } else {
            if (cantidad > stockActual) return;
            setStockActual(stockActual - cantidad);
        }
        setCantidad(1);
    };

    return (
        <div className={styles.item}>
            <div className={styles.content}>
                <img className={styles.image} src={imagen} alt={nombre} />
                <h3 className={styles.title}>{nombre}</h3>
                <p className={styles.price}>Precio: ${precio}</p>
                <p className={`${styles.stock} ${stockActual === 0 ? styles.stockVacio : ''}`}>
                    Stock: {stockActual}
                </p>

                <div className={styles.modeToggle}>
                    <button
                        className={`${styles.modeButton} ${modo === 'agregar' ? styles.modeActive : ''}`}
                        onClick={() => cambiarModo('agregar')}
                    >
                        Agregar
                    </button>
                    <button
                        className={`${styles.modeButton} ${modo === 'retirar' ? styles.modeDanger : ''}`}
                        onClick={() => cambiarModo('retirar')}
                        disabled={stockActual === 0}
                    >
                        Retirar
                    </button>
                </div>

                <div className={styles.controls}>
                    <button className={styles.qtyButton} onClick={decrementar}>-</button>
                    <p className={styles.qtyValue}>{cantidad}</p>
                    <button className={styles.qtyButton} onClick={incrementar} disabled={modo === 'retirar' && cantidad >= stockActual}>+</button>
                </div>
            </div>

            <button
                className={`${styles.addButton} ${modo === 'retirar' ? styles.retirarButton : ''}`}
                onClick={modificarStock}
                disabled={modo === 'retirar' && stockActual === 0}
            >
                Modificar Stock
            </button>

            {detailPath && (
                <Link to={detailPath} className={styles.detailsLink}>
                    Ver detalle
                </Link>
            )}
        </div>
    );
}

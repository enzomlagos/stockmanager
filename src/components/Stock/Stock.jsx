import React, { useState, useEffect } from 'react';
import {Product} from '../Product/Product';
import styles from './Stock.module.css';
function Stock({ Mensaje }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    

    useEffect(() => {
        const cargarProductos = async () => {
                try {
                    const response = await fetch('/data/productos.json');

                    if(!response.ok){
                        throw new Error("No se pudieron cargar los productos")
                    }

                    const datos = await response.json();
                    setProductos(datos);
                }
                catch(e){
                    setError(e.message);
                }
                finally{
                    setCargando(false);
                }
        };

        cargarProductos();
    },[]);

    return (
        <div>
            <h1>{Mensaje}</h1>
            <ul className={styles.list}>
                {productos.map((producto) => (
                    <li key={producto.id} className={styles.item}>
                        <Product {...producto} detailPath={`/stock/product/${producto.id}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Stock; 
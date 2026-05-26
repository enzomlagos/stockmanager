import styles from './AddProduct.module.css';

function  AddProduct({datosForm, manejarCambio, manejarEnvio, manejarCambioImagen}) {
    return (
        <section className={styles.wrapper}>
            <form className={styles.form} onSubmit={manejarEnvio}>
                <h2 className={styles.title}>Agregar producto</h2>

                <label className={styles.label} htmlFor="nombre">Nombre Item:</label>
                <input
                    className={styles.input}
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Laptop Asus"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                    />

                <label className={styles.label} htmlFor="precio">Precio</label>
                <input
                    className={styles.input}
                    type="text"
                    id="precio"
                    name="precio"
                    placeholder="15000"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                    />

                <label className={styles.label} htmlFor="stock">Stock</label>
                <input
                    className={styles.input}
                    type="text"
                    id="stock"
                    name="stock"
                    placeholder="10"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                    />

                <label className={styles.label} htmlFor="image">Imagen:</label>
                <input
                    className={styles.inputFile}
                    type="file"
                    id="image"
                    name="image"
                    onChange={manejarCambioImagen}
                />
                
                <button className={styles.button} type="submit">Agregar al stock</button>
            </form>
        </section>
    );
}

export default AddProduct;
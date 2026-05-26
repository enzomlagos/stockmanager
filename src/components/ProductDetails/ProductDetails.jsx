import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { Product } from '../Product/Product';
 
const ProductDetails = () => { 
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null); 
 
  useEffect(() => { 
    fetch('/data/productos.json') 
      .then(response => response.json()) 
      .then(data => { 
        const productoEncontrado = data.find(p => p.id === parseInt(id)); 
        setProducto(productoEncontrado); 
      }) 
      .catch(error => console.error("Error al cargar el producto:", error)); 
  }, [id]); 
  
  if (!producto) { 
    return <h2>Cargando detalle del producto...</h2>; 
  } 
 
  if (!producto.id) { 
    return <h2>Producto no encontrado.</h2>; 
  } 
 
  return ( 
    <div> 
        <h2>Detalle del Producto: {producto.nombre}</h2> 
        <Product {...producto} />
    </div> 
  ); 
}; 
 
export default ProductDetails; 
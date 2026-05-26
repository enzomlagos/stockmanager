import { useState } from "react";
import AddProduct from "./AddProduct";

export function AddProductForm() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        stock: '',
        precio: ''
        });

    const [imageFile, setImageFile] = useState(null);

    const manejarCambioImagen = (evento) => {
        const file = evento.target.files[0];
        setImageFile(file);
    }


    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        });
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        if(!imageFile) {
            alert("Por favor, suba una imagen antes de enviar el formulario.");
            return;
        }
        const API_KEY = "4009ea3ba6189d849ddc5758f697259d";
        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const respuestaImgbb = await 
                fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, { 
            method: 'POST', 
            body: formData
        }); 
            const dataImgbb = await respuestaImgbb.json();

            if (dataImgbb.success) {
                const imageUrl = dataImgbb.data.url;
                const productoCompleto = {
                    ...datosForm,
                    imageUrl
                };
                alert("Usted ha subido el producto: " + productoCompleto.nombre);
                window.location.reload();
                
            } else{
                throw new Error("Error al subir la imagen a imgbb: " + dataImgbb.error.message);
            }
        }         
        catch (error) {
            console.error("Error al subir la imagen:", error);
            alert("Hubo un error al subir la imagen. Por favor, inténtelo de nuevo.");
        }
    };

    return (
        <AddProduct 
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarCambioImagen={manejarCambioImagen}
            manejarEnvio={manejarEnvio} 
        />
    );
}
        
        
import React from "react"
import imagen from '../masInfo.jpg'
import { useState } from "react"

function Articulo2() {
  //Pasamos de manipular el DOM en JS puro a usar el estado y el manejo de eventos en React.
  const [mostrarInfo, setMostrarInfo] = useState(false)
  const manejarClickBoton = () => {
    setMostrarInfo(!mostrarInfo) //Invierte el valor cada vez que se hace click.
}
  return (
    <div>
      <article className="art2">
        <h2>Título artículo 2</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quisquam molestias hic dolorum suscipit. Voluptatibus, numquam officiis nulla repellendus consequuntur qui soluta ratione facilis natus adipisci. Corrupti fugit optio inventore.</p>
        <button className="boton" onClick={manejarClickBoton}>Más info...</button>
        <div className="info" style={{ display: mostrarInfo ? 'block' : 'none' }}>
          {/* Usamos el estado en los estilos para determinar el valor de "display". */}
          <p>Aquí puedes leer más información del artículo...</p>
          <img src={imagen} alt="Imagen con logo de React" width="50%"></img>
        </div>
      </article>
    </div>
  )
}
export default Articulo2
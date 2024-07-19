import React from "react"

function Navbar({onClick}) {
  let ancla = document.querySelector('.nav-enlace')
  for(let i = 0; i < ancla.length; i++) {
      ancla[i].classList.toggle('desaparece')
  }
  return (
    <div>
      <nav>
        <button className="nav-boton" onClick={onClick}>MENÚ</button>
        <a href="#" className="nav-enlace desaparece">INICIO</a>
        <a href="#" className="nav-enlace desaparece">NOSOTROS</a>
        <a href="#" className="nav-enlace desaparece">CURSOS</a>
        <a href="#" className="nav-enlace desaparece">CONTACTO</a>
      </nav>
    </div>
  )
}
export default Navbar
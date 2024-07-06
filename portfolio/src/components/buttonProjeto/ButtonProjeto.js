import React from 'react'
import './ButtonProjeto.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'

const ButtonProjeto = ({id = "", className = "", nome = "placeholder", idProjeto = 0, onClick = "#", animationDelay="0"}) => {
  return (
    <div id={id} className={'ButtonProjeto '+className} data-id-projeto={idProjeto} onClick={onClick} animationDelay={animationDelay}>
      <h6>{nome}</h6>
    </div>
  )
}



export default ButtonProjeto
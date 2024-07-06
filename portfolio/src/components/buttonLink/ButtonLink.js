import React from 'react'
import './ButtonLink.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'
import Icone_figma from "../../assets/figma.svg"
import Icone_github from "../../assets/contato_github.svg"
import Icone_novaGuia from "../../assets/icone_nova_guia.svg"

const ButtonLink = ({className = "", nome = "placeholder", icone = "figma", href = "#"}) => {

  const getIconeByName = (icone) => {
    switch(icone){
      case "figma":
        return Icone_figma;
      case "github":
        return Icone_github;
      case "novaGuia":
        return Icone_novaGuia;
      default:
        return Icone_novaGuia;
    }
  }

  return (
    <a className='ButtonLinkAnchor link' target="_blank" rel="noreferrer" href={href}>
      <div className="ButtonLink">
        <img className="ButtonLinkImg" src={getIconeByName(icone)} alt="icone do botão"/>
        <h6 className="link">{nome}</h6>
      </div>
    </a>
  )
}

export default ButtonLink
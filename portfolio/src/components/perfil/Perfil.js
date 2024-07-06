import React from 'react'
import './Perfil.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'
import Profile from '../../assets/profile_pic.png'

const Perfil = () => {
  return (
    <div className='cardPerfil'>
			<div className='perfilFoto'>
      	<img src={Profile} alt="Foto de Perfil"></img>
			</div>
			
			<div className='perfilDescricao '>
				<h1> Reryson Andrade </h1>
				<h2> Desenvolvedor Full-Stack </h2>
				<br/>
				<h6> Atuo criando protótipos de UX/UI, Projetando e modelando bancos de dados, criando APIs e websites dinâmicos.</h6>
				<h6> Cursando Desenvolvimento de Software Multiplataforma (Fatec Zona Leste) </h6>
				<h6> São Paulo - SP </h6>
			</div>
    </div>
  )
}

export default Perfil
import React from 'react'
import './Habilidade.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'
import icone_html from '../../assets/html.svg'
import icone_css from '../../assets/css.svg'
import icone_javascript from '../../assets/javascript.svg'
import icone_bootstrap from '../../assets/bootstrap.svg'
import icone_react from '../../assets/react.svg'
import icone_figma from '../../assets/figma.svg'
import icone_java from '../../assets/java.svg'
import icone_spring from '../../assets/springBoot.svg'
import icone_mysql from '../../assets/mysql.svg'
import icone_proatividade from '../../assets/proativo.svg'
import icone_comunicacao from '../../assets/comunicacao.svg'
import icone_trabalho_equipe from '../../assets/trabalho_equipe.svg'
import icone_empatia from '../../assets/empatia.svg'
import icone_resolucao from '../../assets/resolver_problema.svg'
import icone_adaptabilidade from '../../assets/adaptabilidade.svg'

const Habilidade = ({nome, animationDelay}) => {

	const getImageSource = (nome) => {
		switch(nome){
			case "HTML":
				return icone_html;
			case "CSS":
				return icone_css;
			case "JavaScript":
				return icone_javascript;
			case "BootStrap":
				return icone_bootstrap;
			case "ReactJS":
				return icone_react;
			case "Figma":
				return icone_figma;
			case "Java":
				return icone_java;
			case "SpringBoot":
				return icone_spring;
			case "MySQL":
				return icone_mysql;
			case "Proatividade":
				return icone_proatividade;
			case "Comunicação":
				return icone_comunicacao;
			case "Trabalho em Equipe":
				return icone_trabalho_equipe;
			case "Empatia":
				return icone_empatia;
			case "Resolver Problemas":
				return icone_resolucao;
			case "Adaptabilidade":
				return icone_adaptabilidade;
			default:
				return icone_html;
		}
	}

  return (
    <div className='cardHabilidade' data-animation-delay={""+animationDelay}>
      <img src={getImageSource(nome)} alt={"icone que representa "+nome}/>
      <h6>{nome}</h6>
    </div>
  )
}

export default Habilidade
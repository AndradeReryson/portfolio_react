import React from 'react'
import './ButtonContato.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'
import Icone_email from '../../assets/contato_email.svg'
import Icone_telefone from '../../assets/contato_telefone.svg'
import Icone_github from '../../assets/contato_github.svg'
import Icone_linkedin from '../../assets/contato_linkedin.svg'

const ButtonContato = ({icone = "", texto = "Placeholder", href="#"}) => {

	const getIconeButton = (icone) => {
		switch(icone){
			case "email":
				return Icone_email;
			case "telefone":
				return Icone_telefone;
			case "github":
				return Icone_github;
			case "linkedin":
				return Icone_linkedin;
			default:
				return Icone_email;
		}
	}

  return (
    <div className='ButtonContato'>
      <img src={getIconeButton(icone)} alt="icone referente a forma de contato"/>
			{
				href === "#" 
					? <h6 className="link">{texto}</h6>
					: <a className='link' target="_blank" href={href}><h6 className="ButtonContatoLink link">{texto}</h6></a>
			}
      
    </div>
  )
}

export default ButtonContato
import React, { useEffect, useState } from 'react'
import './Formacao.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'
import Icone_livro_fechado from '../../assets/icone_livro_fechado.svg'
import Icone_livro_aberto from '../../assets/icone_livro_aberto.svg'

const Formacao = ({id, className, children}) => {
	const [showing, setShowing] = useState(false);

	const handleShowing = () => {
		if(showing === false){
			setShowing(true);
		} else if (showing === true){
			setShowing(false);
		}
	}

	useEffect(() => {
		const LISTA_H6 = document.querySelectorAll("#"+id+" .formacaoDescricao h6, "+"#"+id+" .formacaoDescricao ul");
		const IMG_WRAPPER = document.querySelector("#"+id+" .formacaoIcone .circulo")
		
		if(showing === false){
			LISTA_H6.forEach(elem => {
				elem.classList.remove("slideDown")
				elem.classList.add("slideUp")
			})
			IMG_WRAPPER.classList.remove("aberto")
			IMG_WRAPPER.classList.add("fechado")

		} else if(showing === true){
			LISTA_H6.forEach(elem => {
				elem.classList.remove("slideUp")
				elem.classList.add("slideDown")
			})
			IMG_WRAPPER.classList.remove("fechado")
			IMG_WRAPPER.classList.add("aberto")

		}
	}, [showing])

	useEffect(() => {
		const LISTA_H6 = document.querySelectorAll("#"+id+" .formacaoDescricao h6, "+"#"+id+" .formacaoDescricao ul");

		LISTA_H6.forEach(elem => {
			elem.classList.add('slideUp')
		})
	}, [])

  return (
    <div id={id} className={"cardFormacao "+className}>
		<div className="formacaoIcone">
			<div className="circulo" onClick={handleShowing}>
				<img className="iconeLivro" src={showing === false ? Icone_livro_fechado : Icone_livro_aberto} alt="icone de um livro"/>
			</div>
		</div>

		<div className="formacaoDescricao">
			<>{children}</>
		</div>
    </div>
  )
}

export default Formacao
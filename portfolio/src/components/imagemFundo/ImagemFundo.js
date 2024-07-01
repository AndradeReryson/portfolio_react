import React from 'react'
import './ImagemFundo.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'
import Fundo01 from '../../assets/portfolio_fundo_01.svg';
import Fundo02 from '../../assets/portfolio_fundo_02.svg';
import Fundo03 from '../../assets/portfolio_fundo_03.svg';
import Fundo04 from '../../assets/portfolio_fundo_04.svg';
import Fundo05 from '../../assets/portfolio_fundo_05.svg';

const ImagemFundo = ({className, numFundo, width, height, left, bottom}) => {
	
	const getFundoByNumero = (numero) => {
		switch(numero){
			case "01":
				return Fundo01;
			case "02":
				return Fundo02;
			case "03":
				return Fundo03;
			case "04":
				return Fundo04;
			case "05":
				return Fundo05;
			default:
				return Fundo01;
		}
	}

  return (
    <img 
			id={"fundo"+numFundo}
			className={"imagemFundo "+className} 
			src={getFundoByNumero(numFundo)} 
			style={{
				width: width,
				height: height,
				left: left,
				bottom: bottom
			}}
			alt="Desenho de fundo aplicado sobre o background"
		/>
  )
}

ImagemFundo.defaultProps = {
	numFundo: "01",
	width: "auto",
	height: "auto",
	left: "auto",
	bottom: "auto"
}
export default ImagemFundo
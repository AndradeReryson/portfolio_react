import React, { useEffect, useState } from 'react'
import './Navbar.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'

const Navbar = () => {
  const [scroll, setScroll] = useState(window.scrollY)
  const [SCROLL_01, setScroll01] = useState(0);
  const [SCROLL_02, setScroll02] = useState(700);
  const [SCROLL_03, setScroll03] = useState(1500);
  const [SCROLL_04, setScroll04] = useState(2200);
  const [SCROLL_05, setScroll05] = useState(3100);

  useEffect(() => {
    const BTN_NAV_SOBRE = document.getElementById('link_sobre');
    const BTN_NAV_FORMACAO = document.getElementById('link_formacao');
    const BTN_NAV_HABILIDADES = document.getElementById('link_habilidades');
    const BTN_NAV_PROJETOS = document.getElementById('link_projetos');
    const BTN_NAV_CONTATO = document.getElementById('link_contato');

    const ARRAY_BUTTONS = [
      BTN_NAV_SOBRE, 
      BTN_NAV_FORMACAO, 
      BTN_NAV_HABILIDADES,
      BTN_NAV_PROJETOS,
      BTN_NAV_CONTATO
    ];

		const handleScrollNav = (e) => {
      /** Vamos descobrir todas as coordenadas de cada Seção com base na sua Div */
      const SECC_01 = document.getElementById('secaoApresentação').getBoundingClientRect();
      const SECC_02 = document.getElementById('secaoFormacao').getBoundingClientRect();
      const SECC_03 = document.getElementById('secaoHabilidades').getBoundingClientRect();
      const SECC_04 = document.getElementById('secaoProjetos').getBoundingClientRect();
      const SECC_05 = document.getElementById('secaoContato').getBoundingClientRect();

      /** Agora, vamos pegar o valor do topo de cada secao e somar com o quanto ja scrollamos */
      const COORD_TOP_SECC_01 = (SECC_01.top + window.scrollY)
      const COORD_TOP_SECC_02 = (SECC_02.top + window.scrollY )
      const COORD_TOP_SECC_03 = (SECC_03.top + window.scrollY)
      const COORD_TOP_SECC_04 = (SECC_04.top + window.scrollY)
      const COORD_TOP_SECC_05 = (SECC_05.top + window.scrollY)

      /** Por fim, vamos arredondar o valor para um numero inteiro redondo (ex: ao inves de 717, queremos 700) */
      const SCROLL_01 = Math.floor(COORD_TOP_SECC_01 / 100) * 100;
      setScroll01(SCROLL_01); // vai ser usado no clique do botão do navbar

      const SCROLL_02 = Math.floor(COORD_TOP_SECC_02 / 100) * 100;
      setScroll02(SCROLL_02); // vai ser usado no clique do botão do navbar

      const SCROLL_03 = Math.floor(COORD_TOP_SECC_03 / 100) * 100;
      setScroll03(SCROLL_03); // vai ser usado no clique do botão do navbar

      const SCROLL_04 = Math.floor(COORD_TOP_SECC_04 / 100) * 100;
      setScroll04(SCROLL_04); // vai ser usado no clique do botão do navbar

      const SCROLL_05 = Math.floor(COORD_TOP_SECC_05/ 100) * 100;
      setScroll05(SCROLL_05); // vai ser usado no clique do botão do navbar

      setScroll(window.scrollY);
			console.log("Scroll: "+window.scrollY);

      /** Abaixo, vamos selecionar todos os botões do nav, tirar a classe "selected" e dependendo da altura do scroll, vamos adicionar essa classe para apenas um dos botões */
			/** PERFIL */
			if(scroll <= (SCROLL_02 - 200)){
        for (let btn of ARRAY_BUTTONS) {
          btn.classList.remove('selected')
        }

        BTN_NAV_SOBRE.classList.add('selected')
			} 

      /** FORMAÇÃO */
      if(scroll >= (SCROLL_02 - 200) && scroll <= (SCROLL_03 - 200)){
        for (let btn of ARRAY_BUTTONS) {
          btn.classList.remove('selected')
        }

        BTN_NAV_FORMACAO.classList.add('selected')
      }
    
      /* HABILIDADES */
      if(scroll >= (SCROLL_03 - 200) && scroll <= (SCROLL_04 - 200)){
        for (let btn of ARRAY_BUTTONS) {
          btn.classList.remove('selected')
        }

        BTN_NAV_HABILIDADES.classList.add('selected')
      }

      /* Projetos */
      if(scroll >= (SCROLL_04 - 200) && scroll <= (SCROLL_05 - 200)){
        for (let btn of ARRAY_BUTTONS) {
          btn.classList.remove('selected')
        }

        BTN_NAV_PROJETOS.classList.add('selected')
      }

      /* Contato */
      if(scroll >= (SCROLL_05 - 200)){
        for (let btn of ARRAY_BUTTONS) {
          btn.classList.remove('selected')
        }

        BTN_NAV_CONTATO.classList.add('selected')
      }
      
		}

		window.addEventListener("scroll", handleScrollNav);
		return () => {
      window.removeEventListener('scroll', handleScrollNav);
    }
	}, [scroll])

  const scrollToSobre = (e) => {
    e.preventDefault();
    window.scrollTo({top: SCROLL_01, behavior: 'smooth'});
    dispatchEvent(new CustomEvent('scroll'))
  }

  const scrollToFormacao = (e) => {
    e.preventDefault();
    window.scrollTo({top: SCROLL_02, behavior: 'smooth'});
    dispatchEvent(new CustomEvent('scroll'))
  }

  const scrollToHabilidades = (e) => {
    e.preventDefault();
    window.scrollTo({top: SCROLL_03, behavior: 'smooth'});
    dispatchEvent(new CustomEvent('scroll'))
  }

  const scrollToProjetos = (e) => {
    e.preventDefault();
    window.scrollTo({top: SCROLL_04, behavior: 'smooth'});
    dispatchEvent(new CustomEvent('scroll'))
  }

  const scrollToContato = (e) => {
    e.preventDefault();
    window.scrollTo({top: SCROLL_05, behavior: 'smooth'});
    dispatchEvent(new CustomEvent('scroll'))
  }

  return (
    <div className='Navbar'>
      <div className="navbarLogo">
      </div>

      <div className="navbarBotoes">
        <a id="link_sobre" href="#secaoApresentação" onClick={scrollToSobre} className='font-h6 link selected'>Sobre</a>
        <a id="link_formacao" href="#secaoFormacao" onClick={scrollToFormacao} className='font-h6 link'>Formação</a>
        <a id="link_habilidades" href="#secaoHabilidades" onClick={scrollToHabilidades} className='font-h6 link'>Habilidades</a>
        <a id="link_projetos" href="#secaoProjetos" onClick={scrollToProjetos} className='font-h6 link'>Projetos</a>
        <a id="link_contato" href="#secaoContato" onClick={scrollToContato} className='font-h6 link'>Contato</a>
      </div>
    </div>
  )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'

const Navbar = () => {
  const [scroll, setScroll] = useState(window.scrollY)

  useEffect(() => {
    const BTN_NAV_SOBRE = document.getElementById('link_sobre');
    const BTN_NAV_FORMACAO = document.getElementById('link_formacao');
    const BTN_NAV_HABILIDADES = document.getElementById('link_habilidades');

    const ARRAY_BUTTONS = [BTN_NAV_SOBRE, BTN_NAV_FORMACAO, BTN_NAV_HABILIDADES];

		const handleScrollNav = (e) => {
      setScroll(window.scrollY);
			console.log("Scroll: "+window.scrollY);

			/** PERFIL */
			if(scroll <= 300){
        for (let btn of ARRAY_BUTTONS) {
          btn.classList.remove('selected')
        }

        BTN_NAV_SOBRE.classList.add('selected')
			} 

      /** FORMAÇÃO */
      if(scroll >= 400 && scroll <= 1000){
        for (let btn of ARRAY_BUTTONS) {
          btn.classList.remove('selected')
        }

        BTN_NAV_FORMACAO.classList.add('selected')
      }
    
    
      /* HABILIDADES */
      if(scroll >= 1200 && scroll <= 1900){
        for (let btn of ARRAY_BUTTONS) {
          btn.classList.remove('selected')
        }

        BTN_NAV_HABILIDADES.classList.add('selected')
      }
      
		}

		window.addEventListener("scroll", handleScrollNav);
		return () => {
      window.removeEventListener('scroll', handleScrollNav);
    }
	}, [scroll])

  const scrollToSobre = (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
    dispatchEvent(new CustomEvent('scroll'))
  }

  const scrollToFormacao = (e) => {
    e.preventDefault();
    window.scrollTo({top: 700, behavior: 'smooth'});
    dispatchEvent(new CustomEvent('scroll'))
  }

  const scrollToHabilidades = (e) => {
    e.preventDefault();
    window.scrollTo({top: 1500, behavior: 'smooth'});
    dispatchEvent(new CustomEvent('scroll'))
  }

  useEffect(() => {

  }, [])

  return (
    <div className='Navbar'>
      <div className="navbarLogo">
      </div>

      <div className="navbarBotoes">
        <a id="link_sobre" href="#secaoApresentação" onClick={scrollToSobre} className='font-h6 link'>Sobre</a>
        <a id="link_formacao" href="#secaoFormacao" onClick={scrollToFormacao} className='font-h6 link'>Formação</a>
        <a id="link_habilidades" href="#secaoHabilidades" onClick={scrollToHabilidades} className='font-h6 link'>Habilidades</a>
        <a id="link_projetos" href="#secaoProjetos" className='font-h6 link'>Projetos</a>
        <a id="link_contato" href="#secaoContato" className='font-h6 link'>Contato</a>
      </div>
    </div>
  )
}

export default Navbar
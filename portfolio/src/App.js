import './general/Theme.css'
import './App.css';
import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';
import Formacao from './components/formacao/Formacao';
import Perfil from './components/perfil/Perfil';
import ImagemFundo from './components/imagemFundo/ImagemFundo';
import Habilidade from './components/habilidade/Habilidade';
import { useEffect, useState } from 'react';

function App() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {

		const handleScroll = (e) => {
      setScroll(window.scrollY);
			console.log("Scroll: "+window.scrollY);

      const FUNDO_01 =  document.getElementById('fundo01');
      const FUNDO_02 =  document.getElementById('fundo02');
      const FUNDO_03 =  document.getElementById('fundo03');

      const ARRAY_FORMACAO =      document.querySelectorAll('.cardFormacao');
      const ARRAY_HABILIDADES =   document.querySelectorAll('.cardHabilidade');


			/** PERFIL */
			if(scroll <= 300){
        FUNDO_01.classList.remove("fadeOut");
				FUNDO_01.classList.add("fadeIn");

			} else {
        FUNDO_01.classList.remove("fadeIn");
        FUNDO_01.classList.add("fadeOut");
      }

      /** FORMAÇÃO */
      if(scroll >= 400 && scroll <= 1000){
        FUNDO_02.classList.remove("fadeOut");
				FUNDO_02.classList.add("fadeIn");

        ARRAY_FORMACAO.forEach(card => {
          card.classList.remove('fadeOut')
          card.classList.add('fadeIn')
        })

      } else {
        FUNDO_02.classList.remove("fadeIn");
        FUNDO_02.classList.add("fadeOut");

        ARRAY_FORMACAO.forEach(card => {
          card.classList.remove('fadeIn')
          card.classList.add('fadeOut')
        })
      }

      /* HABILIDADES */
      if(scroll >= 1200 && scroll <= 1900){
        FUNDO_03.classList.remove("fadeOut");
				FUNDO_03.classList.add("fadeIn");

        ARRAY_HABILIDADES.forEach(card => {
          card.classList.remove('fadeOut')
          card.classList.add('fadeIn')
        })
      } else {
        FUNDO_03.classList.remove("fadeIn");
        FUNDO_03.classList.add("fadeOut");

        ARRAY_HABILIDADES.forEach(card => {
          card.classList.remove('fadeIn')
          card.classList.add('fadeOut')
        })
      }
		}

		window.addEventListener("scroll", handleScroll);
		return () => {
      window.removeEventListener('scroll', handleScroll);
    }
	}, [scroll])


  return (
    <div className="App">
      <Navbar />
      <Container id="secaoApresentação" flexDirection="column">
        <ImagemFundo className="fadeIn" numFundo="01" left={100} height="100%"/>
        <Perfil />
      </Container>

      <Container id="secaoFormacao" flexDirection="column">
        <ImagemFundo numFundo="02" height="100%"/>
        <h3 className="secaoTitulo"> Formação Acadêmica </h3>

        <Formacao id="formacao01" className="fadeOut">
          <h5> Ensino Médio integrado ao Técnico (ETIM) </h5>
          <h5> Etec São Mateus (02/2017 - 11/2019)</h5>
          <h6> Nessa época eu ainda não sabia em qual área eu queria me profissionalizar, então decidi fazer este curso, pois poderia ser uma porta de entrada para outras áreas relacionadas (Gestão de Empresas, Contabilidade, Recursos Humanos, Logistíca etc.)</h6>
          <h6> Meu principal desenvolvimento foram nas Soft Skills, sendo elas: </h6>
          <ul className='font-h6'>
            <li>Comunicação; </li>
            <li>Trabalho em Equipe; </li>
            <li>Organização; </li>
            <li>Pensamento Crítico</li>
          </ul>
        </Formacao>

        <Formacao id="formacao02" className="fadeOut">
          <h5> Técnico em Desenvolvimento de Sistemas </h5>
          <h5> Etec de Itaquera (02/2020 - 07/2021) </h5>
          <h6> Foi meu primeiro contato com a área de desenvolvimento de software. Estudei em modelo remoto devido a pandemia, o que acabou prejudicando um pouco o ensino. Entretanto, aprendi sobre diversos conceitos importantes na programação, sendo eles: </h6>
          <ul className='font-h6'>
            <li>Lógica de Programação;</li>
            <li>Banco de Dados Relacional;</li>
            <li>Programação Web (HTML+CSS+JS);</li>
            <li>Orientação a Objetos (Java);</li>
            <li>Engenharia de Software.</li>
          </ul>
        </Formacao>

        <Formacao id="formacao03" className="fadeOut">
          <h5> Tecnologo em Desenvolvimento de Software Multiplataforma </h5>
          <h5> Fatec Zona Leste (08/2022 - 12/2025)</h5>
          <h6> Cursando atualmente. Dei continuidade aos estudos, aprendendo muito mais sobre os temas previamente abordados e novos conceitos. Também está sendo um ótima experiencia para desenvolver também Soft Skills, através do trabalho em equipe e networking.</h6>
          <h6> Alguns conhecimentos de destaque obtidos aqui foram: </h6>
          <ul className='font-h6'>
            <li>Banco de Dados não relacional; </li>
            <li>Frameworks Back-end & Front-end; </li>
            <li>Estrutura de Dados; </li>
            <li>Programação Mobile Nativo;</li>
            <li>Design UX/UI.</li>
          </ul>
        </Formacao>
      </Container>

      <Container id="secaoHabilidades" flexDirection="column">
        <ImagemFundo numFundo="03" height="100%"/>
        <h4 className="secaoTitulo"> Habilidades </h4>

        <h5> Hard Skills </h5>
        <div class="listaHardSkills">
          <Habilidade nome="HTML" animationDelay="0"/>
          <Habilidade nome="CSS" animationDelay="0.1s"/>
          <Habilidade nome="JavaScript" animationDelay="0.2s"/>
          <Habilidade nome="BootStrap" animationDelay="0.3s"/>
          <Habilidade nome="ReactJS" animationDelay="0.4s"/>
          <Habilidade nome="Figma" animationDelay="0.5s"/>

          <Habilidade nome="Java" animationDelay="0.6s"/>
          <Habilidade nome="SpringBoot" animationDelay="0.7s"/>
          <Habilidade nome="MySQL" animationDelay="0.8s"/>
        </div>

        <h5> Soft Skills </h5>
        <div class="listaSoftSkills">
          <Habilidade nome="Proatividade" />
          <Habilidade nome="Comunicação" />
          <Habilidade nome="Trabalho em Equipe" />
          <Habilidade nome="Empatia" />
          <Habilidade nome="Resolver Problemas" />
          <Habilidade nome="Adaptabilidade" />
        </div>
      </Container>

      <Container id="secaoProjetos" flexDirection="column">
        <ImagemFundo numFundo="04" height="100%"/>
        <h4 className="secaoTitulo"> Projetos </h4>

      </Container>

      

    </div>
  );
}

export default App;

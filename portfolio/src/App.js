import './general/Theme.css'
import './App.css';
import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbarMobile/NavbarMobile';
import Formacao from './components/formacao/Formacao';
import Perfil from './components/perfil/Perfil';
import ImagemFundo from './components/imagemFundo/ImagemFundo';
import Habilidade from './components/habilidade/Habilidade';
import { useEffect, useState } from 'react';
import ButtonProjeto from './components/buttonProjeto/ButtonProjeto';
import ProjectVisualizer from './components/projectVisualizer/ProjectVisualizer';
import ButtonLink from './components/buttonLink/ButtonLink';
import ButtonContato from './components/buttonContato/ButtonContato';



function App() {
  const [scroll, setScroll] = useState(window.scrollY);
  const [projetoSelecionado, setProjetoSelecionado] = useState(0);

  /** Função que muda o projeto com base no botão clicado */
  const selecionarProjeto = (e) => {
    const ARR_BOTOES_PROJETO = document.querySelectorAll('.ButtonProjeto')
    console.log(ARR_BOTOES_PROJETO)

    for (let elem of ARR_BOTOES_PROJETO){
      elem.classList.remove("selected")
    } 

    e.target.classList.add("selected");

    let id_projeto = parseInt(e.target.getAttribute('data-id-projeto'));

    setProjetoSelecionado(id_projeto);
  }

  /** Função que traz os prints das telas + botões com links */
  const getConteudoProjeto = (id_projeto) => {
    switch(id_projeto){
      case 0:
        return (
          <div className="wrapperVisualizer">
            <div className="descricaoProjeto">
              <h6>[HTML5, CSS3, JavaScript]</h6>
              <h6> Projeto Integrador do 1º Semestre da Faculdade </h6>
              <br/>
              <h6> O website Saúde Exata oferece aos usuários quatro calculadoras de índices corporais, sendo elas: calculadoras de peso ideal (IMC), gordura corporal (BF), taxa de metabolismo basal (TMB) e uma calculadora de macros.</h6>
            </div>
            <ProjectVisualizer idProjeto={projetoSelecionado}/>
            <div className="wrapperBotoesVisualizer">
              <ButtonLink href="https://andradereryson.github.io/Saude-exata/index.html" nome="Abrir Projeto" icone='novaGuia'/>
              <ButtonLink href="https://github.com/AndradeReryson/Saude-exata" nome="Ver no Github" icone='github'/>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="wrapperVisualizer">
            <div className="descricaoProjeto">
              <h6>[HTML5, CSS3, JavaScript, NodeJS, Express, Sequelize, MySQL]</h6>
              <h6> Projeto Integrador do 2º Semestre da Faculdade </h6>
              <br/>
              <h6> O website Battle String consiste em um jogo para treinar a digitação. </h6>
              <ul className="font-h6" style={{textAlign: "left"}}>
                <li style={{marginBottom: "15px", lineHeight: "25px"}}>No modo Singleplayer, o jogador tem acesso a diversos textos, onde o seu objetivo é digitar todo o texto o mais rápido possível evitando errar. </li>
                <li style={{marginBottom: "15px", lineHeight: "25px"}}>Já no modo Multiplayer, o jogador compete com outros jogadores em partidas de 5 minutos. A cada 10 segundos é enviada uma palavra, o jogador recebe pontos por cada letra e um bônus caso digite toda a palavra corretamente. </li>
              </ul>
            </div>
            <ProjectVisualizer idProjeto={projetoSelecionado}/>
            <div className="wrapperBotoesVisualizer">
              <ButtonLink href="https://www.figma.com/design/wm8xwdZ5QyosfLjjKZV5V9/Battle_String?node-id=0-1&t=3gwKSiZhP9fMBjrT-0" nome="Ver Protótipo" icone='figma'/>
              <ButtonLink href="https://github.com/AndradeReryson/Battle_String" nome="Ver no Github" icone='github'/>
            </div>
          </div>
        );
      case 2: 
        return (
          <div className="wrapperVisualizer">
            <div className="descricaoProjeto">
              <h6>[HTML5, CSS3, JavaScript, Java + SpringBoot, MySQL]</h6>
              <h6> Projeto Integrador do 3º Semestre da Faculdade </h6>
              <br/>
              <h6> O website Tech Recycle oferece uma plataforma para implementar um Programa de fidelidade.</h6>
              
              <h6> Clientes de lojas parceiras recebem pontos ao descartar eletrônicos nos estabelecimentos. Na plataforma, os pontos podem ser trocados por descontos e benefícios nas lojas disponíveis.</h6>
              <ul className="font-h6" style={{textAlign: "left"}}>
                <li style={{marginBottom: "15px", lineHeight: "25px"}}>Os Clientes podem ver pontos de descarte, pesquisar e resgatar promoções nas lojas parceiras;</li>
                <li style={{marginBottom: "15px", lineHeight: "25px"}}>As Lojas possuem um dashboard onde podem gerenciar suas promoções e lançar os pontos aos clientes.</li>
              </ul>
            </div>
            <ProjectVisualizer idProjeto={projetoSelecionado}/>
            <div className="wrapperBotoesVisualizer">
              <ButtonLink href="https://www.figma.com/design/lGv0fMr6Fw1J2I04SkNfJJ/Tech_Recycle?node-id=0-1&t=j7POkOYKu5qhKuL6-0" nome="Ver Protótipo" icone='figma'/>
              <ButtonLink href="https://github.com/Ulisses-Antonelli/Tech_Recycle" nome="Ver no Github" icone='github'/>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="wrapperVisualizer">
            <div className="descricaoProjeto">
              <h6>[HTML5, CSS3, JavaScript, React, Java + SpringBoot, MySQL]</h6>
              <h6> Projeto Integrador do 4º Semestre da Faculdade </h6>
              <br/>
              <h6> O website Code Crumbs busca gamificar o ensino na área de programação.</h6>
              <h6> O Code Crumbs oferece três tipos diferentes de exercicios, para que os usuários pratiquem a programação e memorizem conceitos: </h6>
              <ul className="font-h6" style={{textAlign: "left"}}>
                <li style={{marginBottom: "15px", lineHeight: "25px"}}> <ins>Quizzes</ins>: São testes de perguntas e respostas. O usuário também pode criar seus próprios quizzes; </li>
                <li style={{marginBottom: "15px", lineHeight: "25px"}}> <ins>Preencher Lacunas</ins>: É dado ao usuário um trecho de código com lacunas e ele deve preencher com a resposta correta; </li>
                <li style={{marginBottom: "15px", lineHeight: "25px"}}> <ins>FlashCards</ins>: São os famosos "Cartões de Memorização", o usuário pode criar seus próprios cartões e visualizá-los na plataforma </li>
              </ul>

            </div>
            <ProjectVisualizer idProjeto={projetoSelecionado}/>
            <div className="wrapperBotoesVisualizer">
              <ButtonLink href="https://www.figma.com/design/KGPL5kDchtFxOLzStM9nMW/CodeCrumbs?node-id=122-2&t=bmcxZatPvp9S6S2x-0" nome="Ver Protótipo" icone='figma'/>
              <ButtonLink href="https://github.com/AndradeReryson/CodeCrumbs-Website" nome="Ver no Github" icone='github'/>
            </div>
          </div>
        );
      default:
        return (
          <div className="wrapperVisualizer">
            <ProjectVisualizer idProjeto={projetoSelecionado}/>
            <div className="wrapperBotoesVisualizer">
            </div>
          </div>
        );
    }
  } 

  /** Adicionando evento de Scroll na Window */
  useEffect(() => {

		const handleScroll = (e) => {
      setScroll(window.scrollY);
			//console.log("Scroll: "+window.scrollY);

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
      const SCROLL_02 = Math.floor(COORD_TOP_SECC_02 / 100) * 100;
      const SCROLL_03 = Math.floor(COORD_TOP_SECC_03 / 100) * 100;
      const SCROLL_04 = Math.floor(COORD_TOP_SECC_04 / 100) * 100;
      const SCROLL_05 = Math.floor(COORD_TOP_SECC_05/ 100) * 100;

      const FUNDO_01 =  document.getElementById('fundo01');
      const FUNDO_02 =  document.getElementById('fundo02');
      const FUNDO_03 =  document.getElementById('fundo03');
      const FUNDO_04 =  document.getElementById('fundo04');
      const FUNDO_05 =  document.getElementById('fundo05');

      const ARRAY_FORMACAO =        document.querySelectorAll('.cardFormacao');
      const ARRAY_HABILIDADES =     document.querySelectorAll('.cardHabilidade');
      const ARRAY_BTN_PROJETO =     document.querySelectorAll('.ButtonProjeto');
      const ARRAY_BTN_LINKS_PROJ =  document.querySelectorAll('.ButtonLinkAnchor');
      const ARRAY_CONTATOS =        document.querySelectorAll('.ButtonContato')

      const PROJECT_DESCRICAO =     document.querySelector('.descricaoProjeto')
      const PROJECT_VISUALIZER =    document.querySelector('.ProjectVisualizer')


			/** PERFIL */
			if(scroll <= (SCROLL_02 - 200)){
        FUNDO_01.classList.remove("fadeOut");
				FUNDO_01.classList.add("fadeIn");

			} else {
        FUNDO_01.classList.remove("fadeIn");
        FUNDO_01.classList.add("fadeOut");
      }

      /** FORMAÇÃO */
      if(scroll > (SCROLL_02 - 200) && scroll <= (SCROLL_03 - 200)){
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

      /** HABILIDADES */
      if(scroll >= (SCROLL_03 - 200) && scroll <= (SCROLL_04 - 200)){
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

      /** PROJETOS */
      if(scroll >= (SCROLL_04 - 200) && scroll <= (SCROLL_05 - 200)){
        FUNDO_04.classList.remove("fadeOut");
				FUNDO_04.classList.add("fadeIn");

        PROJECT_DESCRICAO.classList.remove("fadeOut")
        PROJECT_DESCRICAO.classList.add("fadeIn")

        PROJECT_VISUALIZER.classList.remove("fadeOut")
        PROJECT_VISUALIZER.classList.add("fadeIn")

        ARRAY_BTN_PROJETO.forEach(btn => {
          btn.classList.remove('fadeOut');
          btn.classList.add('fadeIn');
        })

        ARRAY_BTN_LINKS_PROJ.forEach(btn => {
          btn.classList.remove('fadeOut');
          btn.classList.add('fadeIn');
        })

      } else {
        FUNDO_04.classList.remove("fadeIn");
				FUNDO_04.classList.add("fadeOut");

        PROJECT_DESCRICAO.classList.add("fadeOut")
        PROJECT_DESCRICAO.classList.remove("fadeIn")

        PROJECT_VISUALIZER.classList.add("fadeOut")
        PROJECT_VISUALIZER.classList.remove("fadeIn")
        
        ARRAY_BTN_PROJETO.forEach(btn => {
          btn.classList.remove('fadeIn');
          btn.classList.add('fadeOut');
        })

        ARRAY_BTN_LINKS_PROJ.forEach(btn => {
          btn.classList.remove('fadeIn');
          btn.classList.add('fadeOut');
        })
      }

      /** CONTATO */
      if(scroll >= (SCROLL_05 - 200)){
        FUNDO_05.classList.remove("fadeOut");
				FUNDO_05.classList.add("fadeIn");

        ARRAY_CONTATOS.forEach(btn => {
          btn.classList.remove('fadeOut')
          btn.classList.add('fadeIn');
        })

      } else {
        FUNDO_05.classList.remove("fadeIn");
				FUNDO_05.classList.add("fadeOut");

        ARRAY_CONTATOS.forEach(btn => {
          btn.classList.remove('fadeIn')
          btn.classList.add('fadeOut');
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
      <NavbarMobile />
      <Container id="secaoApresentação" flexDirection="column">
        <ImagemFundo className="fadeIn" numFundo="01" left={100} height="100%"/>
        <Perfil />
      </Container>

      <Container id="secaoFormacao" flexDirection="column">
        <ImagemFundo numFundo="02" height='100%'/>
        <h3 className="secaoTitulo"> Formação Acadêmica </h3>

        <Formacao id="formacao01" className="fadeOut">
          <h5> Ensino Médio integrado ao Técnico em Administração (ETIM) </h5>
          <h5> Etec São Mateus (02/2017 - 11/2019)</h5>
          <h6> Nessa época eu ainda não sabia em qual área eu queria me profissionalizar, então decidi fazer este curso, pois poderia ser uma porta de entrada para outras áreas relacionadas (Gestão de Empresas, Contabilidade, Recursos Humanos, Logística etc.)</h6>
          <h6> Meu principal desenvolvimento foram as Soft Skills, sendo elas: </h6>
          <ul className='font-h6'>
            <li>Comunicação; </li>
            <li>Trabalho em Equipe; </li>
            <li>Organização; </li>
            <li>Pensamento Crítico.</li>
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
        <div className="listaHardSkills">
          <Habilidade nome="HTML"/>
          <Habilidade nome="CSS"/>
          <Habilidade nome="JavaScript"/>
          <Habilidade nome="BootStrap"/>
          <Habilidade nome="ReactJS"/>
          <Habilidade nome="Figma"/>

          <Habilidade nome="Java"/>
          <Habilidade nome="SpringBoot"/>
          <Habilidade nome="MySQL"/>
        </div>

        <h5> Soft Skills </h5>
        <div className="listaSoftSkills">
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
        <div className="wrapperBotoesProjeto">
          <ButtonProjeto className="selected" id="btnProjeto01" nome="Saúde Exata" idProjeto={0} onClick={(e) => selecionarProjeto(e)}/>
          <ButtonProjeto id="btnProjeto02" nome="Battle String" idProjeto={1} onClick={(e) => selecionarProjeto(e)}/>
          <ButtonProjeto id="btnProjeto03" nome="Tech Recycle" idProjeto={2} onClick={(e) => selecionarProjeto(e)}/>
          <ButtonProjeto id="btnProjeto04" nome="Code Crumbs" idProjeto={3} onClick={(e) => selecionarProjeto(e)}/>
        </div>

        {/** Puxando os prints & links dos projetos */}
        {getConteudoProjeto(projetoSelecionado)}
      </Container>

      <Container id="secaoContato" flexDirection="column">
        <ImagemFundo numFundo="05" height="100%" width="100%"/>
        <h4 className="secaoTitulo"> Contato </h4>
        <div className='wrapperBotoesContato'>
          <ButtonContato icone="email"      texto="Reryson2002@gmail.com" />
          <ButtonContato icone="telefone"   texto="+55 11 95144-1190"   href="https://api.whatsapp.com/send/?phone=5511951441190"/>
          <ButtonContato icone="github"     texto="/AndradeReryson"     href="https://github.com/AndradeReryson" />
          <ButtonContato icone="linkedin"   texto="/Reryson-Santos"     href="https://www.linkedin.com/in/reryson-santos/" />
        </div>

      </Container>
      
    </div>
  );
}

export default App;

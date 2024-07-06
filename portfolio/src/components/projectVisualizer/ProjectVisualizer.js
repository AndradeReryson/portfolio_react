import React, {useEffect, useState } from 'react'
import './ProjectVisualizer.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'
import Notebook from '../../assets/notebook.svg'
import SaudeExata_01 from '../../assets/projetos/SaudeExata_01.PNG';
import SaudeExata_02 from '../../assets/projetos/SaudeExata_02.PNG';
import SaudeExata_03 from '../../assets/projetos/SaudeExata_03.PNG';
import BattleString_01 from '../../assets/projetos/BattleString_01.jpg';
import BattleString_02 from '../../assets/projetos/BattleString_02.jpg';
import BattleString_03 from '../../assets/projetos/BattleString_03.jpg';
import TechRecycle_01 from '../../assets/projetos/TechRecycle_01.jpg';
import TechRecycle_02 from '../../assets/projetos/TechRecycle_02.jpg';
import TechRecycle_03 from '../../assets/projetos/TechRecycle_03.jpg';
import CodeCrumbs_01 from '../../assets/projetos/CodeCrumbs_01.jpg'
import CodeCrumbs_02 from '../../assets/projetos/CodeCrumbs_02.jpg'
import CodeCrumbs_03 from '../../assets/projetos/CodeCrumbs_03.jpg'
import CodeCrumbs_04 from '../../assets/projetos/CodeCrumbs_04.jpg'
import CodeCrumbs_05 from '../../assets/projetos/CodeCrumbs_05.jpg'

const ProjectVisualizer = ({idProjeto = 0}) => {

  const arrImagens = [
    [SaudeExata_01, SaudeExata_02, SaudeExata_03],
    [BattleString_01, BattleString_02, BattleString_03],
    [TechRecycle_01, TechRecycle_02, TechRecycle_03],
    [CodeCrumbs_01, CodeCrumbs_02, CodeCrumbs_03, CodeCrumbs_04, CodeCrumbs_05]
  ]

  const [indexProj, setIndexProj] = useState(0);

  const getImagesElements = () => {
    let lista_imgs = []

    for(let i = 0; i < arrImagens[idProjeto].length; i++){
      if(i === 0){
        lista_imgs.push(<img src={arrImagens[idProjeto][i]} className='printProjeto ' alt="print da tela do projeto selecionado"/>)
        continue;
      }

      lista_imgs.push(<img src={arrImagens[idProjeto][i]} className='printProjeto' alt="print da tela do projeto selecionado"/>)
    };

    return lista_imgs;
  }

  useEffect(() => {
    const ARRAY_IMGS = document.querySelectorAll(".printProjeto");

    console.log(indexProj)
    for(let i = 0; i < arrImagens[idProjeto].length; i++){
      ARRAY_IMGS[i].style.display = "none";
    }

    let index = indexProj + 1;

    if(index > arrImagens[idProjeto].length){
      setIndexProj(1);
      index = 1;
    }

    ARRAY_IMGS[index - 1].style.display = "block";

    const timeOut = setTimeout(() => {
      setIndexProj(indexProj + 1)
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    }
  }, [indexProj])

  useEffect(() => {
    setIndexProj(0);
  }, [idProjeto])

  return (
    <div className="ProjectVisualizer">
        <img src={Notebook} className='fundoNotebook' alt="desenho de um notebook"/>
        {getImagesElements()}
    </div>
  )
}

export default ProjectVisualizer
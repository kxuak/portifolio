import Card from '../../components/Card'
import './home.scss'
import Image from '../../../public/portifolio image.jpg'

import { useEffect } from 'react'

const Home = () => {


  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active')
      }, index * 150)
    })
  }, [])

  return (
    <div className='home'>
      <div className="headline reveal from-top">
        <p className='more'>Boas-Vindas ao meu portifolio!</p>
        <h4 className='title'>Meu Nome é Kauã <span>Um Desenvolvedor FrontEnd</span></h4>
      </div>

      <div className="sobre">
        <div className="reveal from-left">
          <h2 className='subtitle'>O que eu faço?</h2>
          <h3 className='descricao'>Desenvolvo interfaces e aplicações web do planejamento ao código final, passando pelo design, estrutura e implementação, sempre focando em performance, usabilidade e experiências modernas. Estudo programação há 3 anos, tendo o nivel de inglês intermediário B1 e faço faculdade de engenharia da computação no momento. Estou em busca de uma oportunidade na área, assumindo total compromisso com a instituição e dando meu maximo em cada tarefa. </h3>
        </div>
        <div className="photo-wrapper reveal from-right">
          <div className="hover left"></div>
          <div className="hover right"></div>

          <img src={Image} alt="Minha foto" />
        </div>
      </div>

      <div className='habilities reveal from-bottom'>
        <h4 className='titleSkills'>Tecnologias</h4>
        <div className='cardSkills'>
          <Card
          icon='javascript'
          title='Javascript'
          >Linguagem base do desenvolvimento web, usada para criar interações e lógica no frontend. Foi a que mais me fez aprender no início, permitindo criar projetos mais dinâmicos.</Card>
          <Card
        icon='typescript'
        title='Typescript'
        >Um superset do JavaScript que adiciona tipagem e mais segurança ao código. É a linguagem que mais utilizo hoje e pretendo seguir usando nos meus projetos pessoais.</Card>
        <Card
        icon='react'
        title='React'
        >Biblioteca JavaScript focada na criação de interfaces reutilizáveis. Foi minha escolha logo após HTML e CSS, e não me arrependo pela produtividade que trouxe.</Card><Card
        icon='tailwind'
        title='Tailwind'
        >Framework utilitário para estilização rápida e organizada. Não pratiquei tanto quanto Bootstrap, mas gosto muito da praticidade que ele oferece no código.</Card><Card
        icon='api'
        title='API'
        >Responsável pela comunicação entre sistemas e aplicações. Ainda não tenho tanta prática, mas reconheço sua importância no desenvolvimento moderno.</Card>
        <Card
        icon='bootstrap'
        title='Bootstrap'
        >Framework CSS com componentes prontos para acelerar o desenvolvimento. Me ajudou bastante nos estudos, porém considero limitado para layouts mais personalizados.</Card>
        <Card
        icon='figma'
        title='Figma'
        >Ferramenta de design e prototipação de interfaces. Sempre inicio meus projetos por ela, é muito completa e está sempre aberta no meu navegador.</Card>
        <Card
        icon='node'
        title='Node'
        >Ambiente para executar JavaScript no backend. Ainda não é meu ponto forte, mas pretendo evoluir bastante para me tornar fullstack.</Card>
        </div>
        
      </div>
    </div>
  )
}

export default Home
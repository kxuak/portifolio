 import { useEffect } from 'react'
import CardService from '../../components/CardService'
import './contact.scss'


const Contact = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active')
      }, index * 150)
    })
  }, [])

  return (
    <div className='contact'>
      <h3 className='titleContact reveal from-top'>Vamos trabalhar juntos?</h3>
      <p className='descriptionContact reveal from-top'>Estou pronto para transformar ideias em soluções digitais que realmente fazem a diferença. Aberto a oportunidades profissionais e projetos freelance, fico à disposição para conversarmos sem compromisso. Vamos criar juntos experiências digitais modernas, eficientes e marcantes.
      </p>

      <div className='cardsServices reveal from-bottom'>
        <CardService
        title='Portfólio Profissional'
        description='Criação de um portfólio moderno e responsivo para apresentar seus trabalhos, habilidades e serviços de forma profissional e organizada.'
        benefits={[ 'Presença online profissional', 'Valorização do seu trabalho', 'Design moderno e responsivo', 'Fácil de compartilhar com os clientes']}
        ></CardService>

        <CardService
        title='Landing Page'
        description='Criação de uma landing page focada em conversão, ideal para divulgar um serviço específico, campanha ou oferta de forma objetiva e eficiente.'
        benefits={[ 'Foco total na apresentação para os clientes', 'Comunicação clara e objetiva', 'Carregamento rápido e responsivo', 'Praticidade na navegação']}
        ></CardService>

        <CardService
        title='Site Institucional'
        description='Desenvolvimento de um site institucional para empresas e profissionais que desejam divulgar seus serviços com clareza, credibilidade e organização.'
        benefits={[ 'Mais credibilidade para o negócio', 'Informações bem organizadas', 'Contato facilitado com clientes', 'Presença digital profissional']}
        ></CardService>
      </div>
    </div>
  )
}

export default Contact
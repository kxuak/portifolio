import { useEffect } from 'react'
import CardProject from '../../components/CardProject'

import './myProject.scss'

const MyProjects = () => {

   useEffect(() => {
      const elements = document.querySelectorAll('.reveal')
  
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('active')
        }, index * 150)
      })
    }, [])

  return (
    <div className='myProjects'>
      <h4 className='title-projects reveal from-top'>Meus Projetos</h4>

      <p className='description-projects reveal from-top'>Estou pronto para transformar ideias em soluções digitais que realmente fazem a diferença. Aberto a oportunidades profissionais e projetos freelance, fico à disposição para conversarmos sem compromisso. Vamos criar juntos experiências digitais modernas, eficientes e marcantes.
      </p>

      <div className="cardsProjects reveal from-bottom">
        <CardProject
        title='KumOS'
        descriptionProject='Este site foi desenvolvido com o objetivo de facilitar o cadastro e a gestão de clientes e serviços, oferecendo uma solução simples e eficiente para empresas e profissionais autônomos que buscam melhorar sua organização e produtividade.'
        image="../../../public/Kumos/Kumos.png"
        tecnologias= {['React', 'Typescript', 'Tailwind', 'Figma']}
        link='https://kum-os.vercel.app/'
        github='https://github.com/kxuak/KumOS'
        />
      </div>
      
    </div>
  )
}

export default MyProjects
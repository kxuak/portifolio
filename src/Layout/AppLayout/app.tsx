import { NavLink, Outlet, useLocation } from "react-router"
import { useEffect, useRef } from "react"
import "./app.scss"

import IconGithub from '../../../public/IconGithub/Github.svg'
import IconInstagram from '../../../public/IconInstagram/Instagram.svg'
import IconWhatsapp from '../../../public/IconWhatsapp/Whatsapp.svg'
import IconLinkedin from '../../../public/IconLinkedin/Linkedin.svg'

const AppLayout = () => {
  const location = useLocation()

  const indicatorRef = useRef<HTMLSpanElement | null>(null)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return

    const activeLink = navRef.current.querySelector(
      ".navLink.active"
    ) as HTMLElement | null

    if (!activeLink) return

    const { offsetLeft, offsetWidth } = activeLink

    indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`
    indicatorRef.current.style.width = `${offsetWidth}px`
  }, [location])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active')
      }, index * 150)
    })
  }, [])

  return (
    <div className="appLayout">
      <header className="header reveal from-top">
        <nav className="buttons" ref={navRef}>
          <span className="indicator" ref={indicatorRef} />

          <NavLink to="/" end className="navLink">
            Home
          </NavLink>

          <NavLink to="/projetos" className="navLink">
            Projetos
          </NavLink>

          <NavLink to="/contato" className="navLink">
            Contato
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer reveal from-bottom">
        
          <div className="names">
            <h3>Kauã Araujo</h3>
            <h5>kauaaraujodev@gmail.com</h5>
          </div>
          
          <div className="social">
            <a href="https://github.com/kxuak">
              <img className="icon" src={IconGithub} alt="GitHub Icon" />
            </a>
            <a href="https://www.instagram.com/kxuak_">
              <img className="icon" src={IconInstagram} alt="Instagram Icon" />
            </a>
            <a href="https://wa.me/+5585989096804">
              <img className="icon" src={IconWhatsapp} alt="Whatsapp Icon" />
            </a>
            <a href="https://www.linkedin.com/in/kau%C3%A3-araujo-391319374/">
              <img className="icon" src={IconLinkedin} alt="Linkedin Icon" />  
            </a>
          </div>
        
            
        
      </footer>
        
        
    </div>
  )
}

export default AppLayout

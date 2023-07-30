  import { useEffect, useState } from 'react'
  import {
    faBootstrap,
    faCss3,
    faGitAlt,
    faHtml5,
    faJava,
    faJsSquare,
    faLaravel,
    faNode,
    faNpm,
    faPhp,
    faPython,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import Loader from 'react-loaders'
  import AnimatedLetters from '../AnimatedLetters'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import './index.scss'

  const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i']}
                idx={15}
              />
            </h1>
        <p>
          Soy un desarrollador full stack muy ambicioso en busca de un puesto en una empresa de tecnologías de la información establecida, con la oportunidad de trabajar con las últimas tecnologías en proyectos desafiantes y diversos.
        </p>
        <p align="LEFT">
          Tengo mucha confianza en mí mismo, soy naturalmente curioso y siempre estoy trabajando en mejorar mis habilidades tanto en el desarrollo front-end como en el back-end, resolviendo problemas de diseño y programación uno a la vez.
        </p>
        <p>
        Si tuviera que definirme en una sola frase, sería un apasionado del mundo de las tecnologías de la información y un amante de la música, siempre buscando la armonía perfecta entre la creatividad y la eficiencia.
        </p>


          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPhp} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faJava} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faNode} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faLaravel} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faNpm} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faPython} color="#EC4D28" />
              </div>
            </div>
          </div>
          <div className="stage-cube-cont2">
            <div className="cubespinner2">
              <div className="face1">
                <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
  }

  export default About

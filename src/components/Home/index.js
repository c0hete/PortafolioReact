import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import logoImage from '../../assets/images/logo-gradiente.png'; // Importa la imagen de logo

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['', 'J', 'o', 's', 'é'];
  const jobArray = [
    'p',
    'r',
    'o',
    'g',
    'r',
    'a',
    'm',
    'a',
    'd',
    'o',
    'r',
    ' ',
    'w',
    'e',
    'b',
    '.',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>a,</span>
            <br />
            <span className={`${letterClass} _15`}>S</span>
            <span className={`${letterClass} _16`}>o</span>
            <span className={`${letterClass} _17`}>y</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
          </h1>
          <h2>Full Stack Developer / JavaScript / Java / Php</h2>
          <div className="button-container">
            <Link to="/contact" className="flat-button">
              CONTACTÁME
            </Link>
            <div className="cv-buttons">
              <a
                href="/documents/JOSE-ALVARADO-PROGRAMADOR-ES.pdf"
                target="_blank"
                className="flat-button "
                download="JOSE-ALVARADO-PROGRAMADOR-ES.pdf"
              >
                CURRICULUM - ES
              </a>
              <a
                href="/documents/JOSE-ALVARADO-DEVELOPER-EN.pdf"
                target="_blank"
                className="flat-button"
                download="JOSE-ALVARADO-DEVELOPER-EN.pdf"
              >
                CURRICULUM - EN
              </a>
            </div>
          </div>
        </div>
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;

import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_nabqaor', 'template_lwrj163', form.current, 'u5cg8p36QlnIy5BWr')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'á', 'c', 't','a','m', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Estoy interesado/a en oportunidades freelance, especialmente en proyectos ambiciosos o grandes. 
          Sin embargo, si tienes cualquier otra solicitud o pregunta, 
          no dudes en contactarme utilizando el formulario que se encuentra a continuación.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Correo Electrónico"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Asunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          José Alvarado,
          <br />
          +56 9 4893 7755
          <br />
         Chile,
          <br />
          Temuco <br />
          <br />
          <span>jose.alv.mazz.dev@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[-38.7318286, -72.6141467]} zoom={8}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[-38.737432, -72.590073]}>
  <Popup>Si algun día quieres tomarte un café, aquí vive José.</Popup>
  </Marker>
</MapContainer>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

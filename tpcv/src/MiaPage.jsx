import heroImage from './assets/images/portfolio-hero.png'
import aboutBackground from './assets/images/about-background.png'
import middleBackground from './assets/images/middle-background.png'
import bottomBackground from './assets/images/bottom-background.png'
import contactIntroImage from './assets/images/agregar2.png'
import './MiaPage.css'

export default function MiaPage() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-hero">
        <img
          src={heroImage}
          alt="Portafolio de Mia"
          draggable={false}
          className="portfolio-hero-image"
        />
      </header>

      <section className="about-section">
        <div className="about-card">
          <img
            src={aboutBackground}
            alt="Hoja con dibujo de Mia sujetada con chinche"
            draggable={false}
            className="about-background"
          />
          <div className="about-content">
            <h2 className="about-title">sobre mi :)</h2>
            <p className="about-text about-text-intro">
              Hola! soy Mia, tengo 18 años y soy egresada del colegio ORT con
              especialización en TIC.
            </p>
            <p className="about-text about-text-dream">
              Mi sueño es convertirme en artista plástica. Mi creatividad e
              imaginación son mis puntos fuertes que espero desarrollar aún más
              para convertirme en una gran artista.
            </p>
          </div>
        </div>
      </section>

      <section className="details-section">
        <div className="details-board">
          <img
            src={middleBackground}
            alt="Tablón con secciones de educación, idiomas y hobbies"
            draggable={false}
            className="details-background"
          />
          <div className="details-education">
            <p>Bachillerato en ORT con orientación a TIC.</p>
          </div>
          <div className="details-languages">
            <h3>idiomas:</h3>
            <p>español</p>
            <p>e</p>
            <p>inglés</p>
          </div>
          <div className="details-hobbies">
            <h3>hobbies:</h3>
            <p>
              Me gusta dibujar y pintar, como también disfruto de tocar el violín.
            </p>
          </div>
        </div>
      </section>

      <footer className="contact-section">
        <img
          src={contactIntroImage}
          alt="Cuaderno cerrado con notas"
          draggable={false}
          className="contact-intro-image"
        />
        <div className="contact-wrapper">
          <img
            src={bottomBackground}
            alt="Pincel y trazo de pintura roja"
            draggable={false}
            className="contact-background"
          />
          <div className="contact-card">
            <h3>contacto:</h3>
            <a href="mailto:dzwonikmia@gmail.com">dzwonikmia@gmail.com</a>
            <span>+54 911 5504-0113</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

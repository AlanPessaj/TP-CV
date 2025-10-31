import heroImage from './assets/images/portfolio-hero.png'
import aboutBackground from './assets/images/about-background.png'
import './PortfolioPage.css'

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-hero">
        <img
          src={heroImage}
          alt="Portafolio de Mia"
          className="portfolio-hero-image"
        />
      </header>

      <section className="about-section">
        <div className="about-card">
          <img
            src={aboutBackground}
            alt="Hoja con dibujo de Mia sujetada con chinche"
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
        <article className="detail-card detail-education">
          <h3>educación:</h3>
          <p>Bachillerato en ORT con orientación a TIC.</p>
        </article>

        <article className="detail-card detail-languages">
          <h3>idiomas:</h3>
          <ul>
            <li>español</li>
            <li>inglés</li>
          </ul>
        </article>

        <article className="detail-card detail-hobbies">
          <h3>hobbies:</h3>
          <p>
            Me gusta dibujar y pintar, como también disfruto de tocar el violín.
          </p>
        </article>
      </section>

      <footer className="contact-section">
        <div className="brush-stroke" />
        <div className="contact-card">
          <h3>contacto:</h3>
          <a href="mailto:dzwonikmia@gmail.com">dzwonikmia@gmail.com</a>
          <span>+54 911 5504-0113</span>
        </div>
      </footer>
    </div>
  )
}

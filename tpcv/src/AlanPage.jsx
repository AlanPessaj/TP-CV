import alanBackground from './assets/images/alan-background.png'
import alanCursor from './assets/images/alan-cursor.png'
import alanNotepads from './assets/images/alan-notepads.png'
import alanSystemMessage from './assets/images/alan-systemmessage.png'
import './AlanPage.css'

export default function AlanPage() {
  return (
    <div className="alan-page">
      <section className="alan-top">
        <img
          src={alanBackground}
          alt=""
          aria-hidden="true"
          className="alan-background"
          draggable={false}
        />

        <img
          src={alanNotepads}
          alt=""
          aria-hidden="true"
          className="alan-notepads"
          draggable={false}
        />
        <span className="alan-notepads__label alan-notepads__label--port">
          FOLIO
        </span>
        <span className="alan-notepads__label alan-notepads__label--folio">
          PORT
        </span>

        <img
          src={alanCursor}
          alt=""
          aria-hidden="true"
          className="alan-pointer"
          draggable={false}
        />
      </section>

      <div className="alan-lower">
        <div className="alan-dialog-wrapper">
          <img
            src={alanSystemMessage}
            alt=""
            aria-hidden="true"
            className="alan-dialog"
            draggable={false}
          />
          <span className="alan-dialog__text">sobre mi</span>
        </div>

        <section className="alan-bottom" aria-labelledby="alan-info-heading">
          <article className="alan-info">
            <h1 id="alan-info-heading" className="alan-info__intro">
              Hola mundo!
            </h1>
            <p className="alan-info__intro">
              Soy string nombre = <span>&quot;alan_pessaj&quot;</span>;
            </p>
            <p className="alan-info__intro">
              Nací en caba (2007) y aspiro a convertirme en un gran programador,
              capaz de crear proyectos que inspiren y faciliten la vida de las
              personas.
            </p>
            <p className="alan-info__code">public class Info</p>
            <p className="alan-info__code">{'{'}</p>
            <p className="alan-info__body">
              <span className="alan-info__label">educación</span> = Bachillerato en ORT con
              orientación a TIC.
            </p>
            <p className="alan-info__body">
              <span className="alan-info__label">experiencia</span> = Tengo experiencia
              trabajando como desarrollador en video juegos.
            </p>
            <p className="alan-info__body">
              <span className="alan-info__label">hobbies</span> = En mi tiempo libre practico
              defensa personal.
            </p>
            <p className="alan-info__body">
              <span className="alan-info__label">idiomas</span> = Domino el español e ingles.
            </p>
            <p className="alan-info__body">
              <span className="alan-info__label">contacto</span> = alanpessaj123@gmail.com
            </p>
            <p className="alan-info__code">{'}'}</p>
          </article>

          <p className="alan-game-over">Game Over</p>
        </section>
      </div>
    </div>
  )
}

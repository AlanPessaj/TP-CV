import alanBackground from './assets/images/alan-background.png'
import alanCursor from './assets/images/alan-cursor.png'
import alanNotepads from './assets/images/alan-notepads.png'
import alanSystemMessage from './assets/images/alan-systemmessage.png'
import alanProjectsWindow from './assets/images/proyectos.png'
import ticardeWindow from './assets/images/ticarde.png'
import buzzconWindow from './assets/images/buzzcon.png'
import unityWindow from './assets/images/unity.png'
import './AlanPage.css'

export default function AlanPage() {
  const projects = [
    {
      title: 'TICARDE',
      description:
        'Arcade con tres juegos retro que desarrollé como proyecto escolar junto a mi equipo.',
      image: ticardeWindow,
      alt: 'Ventana con logo de Ticarde',
      variant: 'ticarde',
    },
    {
      title: 'Buzzcon',
      description:
        'Buzzcon busca conectar a comunidades con experiencias interactivas diseñadas para ferias tecnológicas.',
      image: buzzconWindow,
      alt: 'Ventana con logo de Buzzcon',
      variant: 'buzzcon',
    },
    {
      title: 'Unity Networks',
      description:
        'Trabajo como desarrollador para Unity Networks, una comunidad online enfocada en videojuegos.',
      image: unityWindow,
      alt: 'Ventana de Paint con el logo de Unity Networks',
      variant: 'unity',
    },
  ]

  const [ticardeProject, buzzconProject, unityProject] = projects

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

          <section className="alan-projects" aria-labelledby="alan-projects-heading">
            <h2 id="alan-projects-heading" className="sr-only">
              Proyectos
            </h2>
            <div className="alan-dialog-wrapper alan-projects__dialog">
              <img
                src={alanProjectsWindow}
                alt=""
                aria-hidden="true"
                className="alan-dialog alan-projects__dialog-img"
                draggable={false}
              />
              <span className="alan-dialog__text alan-projects__dialog-text">
                proyectos
              </span>
            </div>

            <div className="alan-projects__list">
              <div className="alan-projects__pair">
                {[ticardeProject, buzzconProject].map((project) => (
                  <article
                    className={`alan-project-card alan-project-card--${project.variant}`}
                    key={project.title}
                  >
                    <div className="alan-project-card__media">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="alan-project-card__image"
                        draggable={false}
                      />
                      <div className="alan-project-card__overlay">
                        <p className="alan-project-card__title">
                          {project.title}
                        </p>
                        <p className="alan-project-card__text">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <article
                className={`alan-project-card alan-project-card--${unityProject.variant}`}
                key={unityProject.title}
              >
                <div className="alan-project-card__media">
                  <img
                    src={unityProject.image}
                    alt={unityProject.alt}
                    className="alan-project-card__image"
                    draggable={false}
                  />
                  <div className="alan-project-card__overlay">
                    <p className="alan-project-card__title">
                      {unityProject.title}
                    </p>
                    <p className="alan-project-card__text">
                      {unityProject.description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <p className="alan-game-over">Game Over</p>
        </section>
      </div>
    </div>
  )
}

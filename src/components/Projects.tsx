import project1 from '../utils/images/project1.jpg';
import project2 from '../utils/images/project2.jpg';
import project3 from '../utils/images/project3.jpg';
import './projects.css';

const Projects = () => {
  return (
    <section className="section section-projects">
      <div className="container container-projects">
        <header className="header header-projects">
          <h3 className="subheading">Projects</h3>
          <h2 className="heading-secondary">
            Here you can find some of my work.
          </h2>
        </header>
        <div className="projects-display-grid">
          <div className="project-display-grid-item">
            <div className="project-display-image-div">
              <img src={project1} alt="project 1" />
            </div>
            <div className="project-display-description-div">
              <p className="project-display-description-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                odit ipsam hic, voluptatem, earum, quas mollitia soluta harum
                excepturi nisi quod molestiae ab iusto autem dolor ea facilis
                iste optio?
              </p>
              <div className="project-display-buttons-div">
                <button className="btn btn-netlify">Live link</button>
                <button className="btn btn-github">Github</button>
              </div>
            </div>
          </div>
          <div className="project-display-grid-item">
            <div className="project-display-description-div">
              <p className="project-display-description-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                odit ipsam hic, voluptatem, earum, quas mollitia soluta harum
                excepturi nisi quod molestiae ab iusto autem dolor ea facilis
                iste optio?
              </p>
              <div className="project-display-buttons-div">
                <button className="btn btn-netlify">Live link</button>
                <button className="btn btn-github">Github</button>
              </div>
            </div>
            <div className="project-display-image-div">
              <img src={project2} alt="project 2" />
            </div>
          </div>
          <div className="project-display-grid-item">
            <div className="project-display-image-div">
              <img src={project3} alt="project 3" />
            </div>
            <div className="project-display-description-div">
              <p className="project-display-description-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                odit ipsam hic, voluptatem, earum, quas mollitia soluta harum
                excepturi nisi quod molestiae ab iusto autem dolor ea facilis
                iste optio?
              </p>
              <div className="project-display-buttons-div">
                <button className="btn btn-netlify">Live link</button>
                <button className="btn btn-github">Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

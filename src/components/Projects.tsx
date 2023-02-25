import project1 from '../utils/images/project1.png';
import project2 from '../utils/images/project2.png';
import project3 from '../utils/images/project3.png';
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
        <div className="projects-display-container">
          <div className="project-display-item">
            <div className="project-display-image-div">
              <img src={project1} alt="project 1" />
            </div>
            <div className="project-display-description-div">
              <h3 className="subheading">E commerce store</h3>
              <p className="project-display-description-p">
                Fully responsive Ecommerce website with landing page.
              </p>
              <div className="project-display-buttons-div">
                <button className="btn btn-netlify">Live link</button>
                <button className="btn btn-github">Github</button>
              </div>
            </div>
          </div>
          <div className="project-display-item display-invert">
            <div className="project-display-description-div">
              <p className="project-display-description-p">
                <h3 className="subheading">youtube clone</h3>
                Video sharing plaftorm similar to YouTube done in dark mode.
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
          <div className="project-display-item">
            <div className="project-display-image-div">
              <img src={project3} alt="project 3" />
            </div>
            <div className="project-display-description-div">
              <h3 className="subheading">cv creator app</h3>
              <p className="project-display-description-p">
                User friendly application that allows users to enter information
                about themselves as well as to preview and print their CV.
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

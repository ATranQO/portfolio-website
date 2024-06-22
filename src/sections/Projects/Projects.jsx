import styles from "./ProjectsStyles.module.css";
import konzole01 from "../../assets/konzole001.png";
import App01 from "../../assets/App01.png";
import Tran from "../../assets/Tran.png";
import ProjectCard from "../../common/ProjectCard";





function Projects () {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={konzole01} 
            link="https://github.com/ATranQO/prvni" 
            h3="Konzolová aplikace"
            />
             <ProjectCard 
            src={App01} 
            link="https://github.com/ATranQO/fullstack-project" 
            h3="Full-stack aplikace"
            />
             <ProjectCard 
            src={Tran} 
            link="https://github.com/ATranQO/portfolio-website" 
            h3="Portfolio Website"
            />
        </div>
        </section>
  );
}

export default Projects;
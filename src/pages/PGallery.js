import pData from '../projects.json'
import Project from '../components/Project';
import '../styles/project.css'

function PGallery(){


    return(

        <div className="projectContainer projectBg">

        <h1 className="portfolio-title">Portfolio</h1>
        <p className="p">Here you can find some of my most recent projects</p>

       <section className="project-grid">
       {pData.map((project, index) => (
        <Project 
        key={index}
        title={project.title}
        image={project.image}
        description={project.description}
        tools={project.tools}
        github={project.github}
        deployed={project.deployed}
        />
        ))}
       </section>
       </div>

    )
}


export default PGallery;
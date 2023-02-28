import pData from '../projects.json'
import Project from '../components/Project';
import '../styles/project.css'

function PGallery(){


    return(

        <div className="projectBg">

        <h1>Project Gallery</h1>

       <section className="project-grid">
       {pData.map((project, index) => (
        <Project 
        key={index}
        title={project.title}
        image={project.image}
        />
        ))}

        {/* <div className="project-card">
            <h4>Title</h4>  
        </div>

        <div className="project-card">
            <h4>Title</h4>
        </div>

        <div className="project-card">
            <h4>Title</h4>
        </div> */}
       </section>
       </div>

    )
}


export default PGallery;
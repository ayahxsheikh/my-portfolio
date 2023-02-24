import Project from '../components/Project';
import pData from '../projects.json'
import '../styles/project.css'

function PGallery(){


    return(
        // export project.js
        // map over project arr, give parent el key and index 
        // print out each item and its obj.properties
        <div className="projectBg">

        <h1>Project Gallery</h1>

       <section className="project-grid">
       {pData.map((proj, index) => (
        <Project 
        key={index}
        title={proj.title}
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
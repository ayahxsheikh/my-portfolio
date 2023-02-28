// import musixTube from '../images/musixTube.png'

function Project(props){

    // const {title, deployed, github, image} = props.projectData;
    return (
        <>
            <div className="project-card">
                <h4>{props.title}</h4>
                <img className="proj-img" src={props.image} alt="title"/>
            </div>
        
        </>
    )
}

export default Project
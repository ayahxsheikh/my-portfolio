
function Project(props){

    return (
        <>
            <div className="project-card">
                <figure className="img-overlay">
                    <img className="proj-img" src={props.image} alt="title"/>
                    <figcaption>
                        <p>{props.title}</p>
                        <p>{}</p>
                    </figcaption>
                </figure>
                {/* <div className="card-btm">
                    <h4 className="p-title">{props.title}</h4>
                <button className="btn">View More</button>
                </div> */}
            </div>
        
        </>
    )
}

export default Project
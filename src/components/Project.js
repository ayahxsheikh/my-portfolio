import { useState } from 'react';
import Modal from './Modal';



function Project(props){

    const [showModal, setShowModal] = useState(false);

    const func = () => {
        setShowModal(true)
    }

    return (
        <>
            <div onClick={func} className="project-card">
                <figure className="img-overlay">
                    <img className="proj-img" src={props.image} alt="title"/>
                    <figcaption>
                        <p className="p-title">{props.title}</p>
                        <Modal show={showModal}/>
                        <p>{}</p>
                    </figcaption>
                </figure>
            </div>
        
        </>
    )
}

export default Project
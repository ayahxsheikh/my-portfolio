import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Project(props){

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div onClick={openModal} className="project-card">
                <figure className="img-overlay">
                    <img className="proj-img" src={props.image} alt="title"/>
                    <figcaption>
                        <p className="p-title">{props.title}</p>
                    </figcaption>
                </figure>
            </div>
            <Modal 
            isOpen={showModal} 
            onRequestClose={closeModal} 
            style={{
                content: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    left: '50%',
                    right:'auto',
                    bottom: 'auto',
                    marginRight: "-50%",
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#00000080',
                    padding: '0',
                    zIndex: '999'
                },
                overlay: {
                    backgroundColor: '#41404074'
                }
            }}
            >

            <div className='modal'>
                <div className='modal-content'>
                    <div className="modal-header close-icon">
                        <button onClick={closeModal}>Close</button>
                    </div>
                    <h2 className='modal-title'>{props.title}</h2>
                    <div className='modal-body'>
                        <img className="modalImg" src={props.image} alt="img"/>
                        {props.description}
                        </div>
                    <div className='modal-footer'>
                        <p>Tools: {props.tools}</p>
                        <button className="modalBtn">Live View</button>
                        <button className="modalBtn">Github</button>
                    </div>
                </div>
            </div>

            </Modal>
        
        </>
    )
}

export default Project
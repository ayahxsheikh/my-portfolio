import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// const styles = {
//     modalContent: {
//         position: 'fixed',
//         top: '0',
//         left: '0',
//         right:'0',
//         bottom: '0',
//         backgroundColor: '#5e5b5b34',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }

// }

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
                        <p>{}</p>
                    </figcaption>
                </figure>
            </div>
            <Modal 
            isOpen={showModal} 
            onRequestClose={closeModal} 
            // style={styles.modalContent}
            >

            <div className='modal'>
                <div className='modal-content'>
                    <div className="modal-header close-icon">
                        <button onClick={closeModal}>Close</button>
                    </div>
                    <h2 className='modal-title'>Title</h2>
                    <h4 className='modal-body'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos voluptate et voluptatem accusamus a, nam dolor omnis laboriosam commodi vel beatae, odit ad, quae ab tempore incidunt ea mollitia expedita</h4>
                    <p>Tools: HTML, CSS, JavaScript</p>
                    <div className='modal-footer'>
                        <button>Live View</button>
                        <button>Github</button>
                    </div>
                </div>
            </div>

            </Modal>
        
        </>
    )
}

export default Project
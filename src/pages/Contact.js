import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/contact.css'

const styles = {
    h3: {
        textAlign: 'center',
        color: '#717577'
    },
    p: {
        color: '#222121da'
    },
    text1: {
        backgroundColor: '#deeff2ee'
    },
    text2: {
        backgroundColor:'#f1e6f1ee'
    },
    text3: {
        backgroundColor: '#eef6dbee'
    }
}

function Contact(){

    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <>
        <main className="contactBg main-wrapper">
            <h1 className="contact-title">Let's Get in Touch</h1>
                    <h3 style={styles.h3}>Drop me an email or fill out the form below. I look forward to hearing from you</h3>
            <section className="contact-grid">

                <aside className="contact-info"> 

                   <div className="contact-text" style={styles.text1} >
                        <FontAwesomeIcon icon="fas fa-user" className="icon"/>
                        <div className="text-info">
                            <h3 style={styles.p}>Name:</h3>
                            <h4>Ayah Sheikh</h4>
                        </div>
                    </div> 

                    <div className="contact-text" style={styles.text2}>
                        <FontAwesomeIcon icon="fas fa-envelope" className="icon"/>
                        <div className="text-info">
                            <h3 style={styles.p}>Email:</h3>
                            <h4>ayahshayk@gmail.com</h4>
                        </div>
                    </div>

                    <div className="contact-text" style={styles.text3} >
                        <FontAwesomeIcon icon="fas fa-map-marked-alt" className="icon"/>
                        <div className="text-info">
                            <h3 style={styles.p}>Location:</h3>
                            <h4>London, UK</h4>
                        </div>
                    </div>
                </aside>
                {/* <h3>Fill out the form</h3> */}
           
                <div className="background-div" id="contact">
                    <form onSubmit={handleSubmit} >
                        <input type="text" placeholder="Name" />
                        <input  placeholder="Email Address" />
                        <textarea placeholder="Enter Your Message" cols="30" rows="10" ></textarea>
                        <button className="f-btn" >Submit</button>
                    </form>
                </div>
            </section>

            <section className="icon-div">
                <a href="https://github.com/ayahxsheikh">
                        <FontAwesomeIcon icon="fab fa-github" className="icon gh" size="lg"/>
                    </a> 
                    <a href="https://instagram.com/"> 
                        <FontAwesomeIcon  icon="fa-brands fa-instagram" className="icon ig" size="lg" />
                    </a> 
                    <a href="https://twitter.com/">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" className="icon tw" size="lg"/>
                    </a> 
                    <a href="https://linkedin.com/"> 
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icon in" size="lg"/>
                    </a> 
            </section>

        </main>
        </>
    )
}

export default Contact
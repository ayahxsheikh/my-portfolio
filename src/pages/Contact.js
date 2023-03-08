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

                   <div className="contact-text text1" style={styles.text1} >
                        <FontAwesomeIcon icon="fas fa-user" className="icon"/>
                        <div className="text-info">
                            <h4 style={styles.p}>Name:</h4>
                            <h4>A Sheikh</h4>
                        </div>
                    </div> 

                    <div className="contact-text text2" style={styles.text2}>
                        <FontAwesomeIcon icon="fas fa-envelope" className="icon"/>
                        <div className="text-info">
                            <h4 style={styles.p}>Email:</h4>
                            <h4>aaminah.xa@gmail.com</h4>
                        </div>
                    </div>

                    <div className="contact-text text3" style={styles.text3} >
                        <FontAwesomeIcon icon="fas fa-map-marked-alt" className="icon"/>
                        <div className="text-info">
                            <h4 style={styles.p}>Location:</h4>
                            <h4>London, UK</h4>
                        </div>
                    </div>
                </aside>
           
                <div className="form-bg" id="contact">
                    <form onSubmit={handleSubmit} >
                        <input type="text" placeholder="Name" />
                        <input  placeholder="Email Address" />
                        <textarea placeholder="Enter Your Message" cols="30" rows="10" ></textarea>
                        <button className="f-btn" >Submit</button>
                    </form>
                </div>
            </section>

                <h3 style={styles.h3}>Connect with me on Socials</h3>
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
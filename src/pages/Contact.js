import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/contact.css'

function Contact(){

    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <>
        <main className="contactBg main-wrapper">
            <h1 className="contact-title">Let's Get in Touch</h1>
            <section className="contact-grid">

                <aside className="contact-info"> 
                    {/* <h3>contact Information</h3> */}
                   <div className="text" >
                        <h3>Name</h3>
                        <h4>Ayah Sheikh</h4>
                    </div> 
                    <div className="text">
                        <h3>Email</h3>
                        <h4>ayahshaykgmail.com</h4>
                    </div>
                    <div className="text">
                        <h3>Location</h3>
                        <h4>London, UK</h4>
                    </div>
                </aside>
           
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
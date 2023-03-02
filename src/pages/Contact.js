import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/contact.css'

function Contact(){

    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <>
        <div className="contactBg div-wrapper">

            <div className="background-div">
                <h2 className="form-h2">Let's Get in Touch</h2>

                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Name" />
                    <input  placeholder="Email Address" />
                    <textarea placeholder="Enter Your Message" cols="30" rows="10" ></textarea>
                    <button className="f-btn" >Submit</button>
                </form>
            </div>

                <div className="icon-div"> 
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
                </div>
        </div>
        </>
    )
}

export default Contact
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/contact.css'

const styles = {
    p: {
        color: '#eff7fe'
    },
    a: {
        textDecoration: 'none',
        color: '#88898a'
    },
    text1: {
        backgroundColor: '#484848fc'
    },
    text2: {
        backgroundColor:'#484848fc'
    },
    text3: {
        backgroundColor: '#484848fc'
    }
}

function Contact(){

    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
        access_key: '8c961c20-8c8c-41f8-9d52-eecd317a5884'
    })
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        const data = JSON.stringify(formData);

          fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: data
              })
              .then(res => res.json())
              .then(data => {
                setSuccess(true);
                setFormData({
                    ...formData,
                    name: '',
                    email: '',
                    message: '',
                })

                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            })
              .catch(err => console.log(err))
    }

    return (
        <>
        <main className="contactBg contact-wrapper">
            <h1 className="contact-title">Let's Get in Touch</h1>
            <h3 className="sub-heading">Drop me an email or fill out the form below. I look forward to hearing from you</h3>

            <section className="contact-grid">
                <div className="form-bg" id="contact">
                    <form onSubmit={handleSubmit} >
                        <input name="name" 
                            onChange={handleChange} 
                            value={formData.name} 
                            type="text" placeholder="Name" />
                        <input 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange} 
                            placeholder="Email Address" />
                        <textarea 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange} 
                            placeholder="Enter Your Message" cols="30" rows="10" ></textarea>
                        <button className="f-btn" >Submit</button>
                    </form>
                    {success && <p style={styles.p}>Form Submitted Successfully!</p>}
                </div>

                <aside className="contact-info"> 
                   <div className="contact-text text1" >
                        <FontAwesomeIcon icon="fas fa-user" className="icon ic1"/>
                        <div className="text-info">
                            <h4 style={styles.p}>Name:</h4>
                            <h4>Ayah Sheikh</h4>
                        </div>
                    </div> 

                    <div className="contact-text text2" >
                        <FontAwesomeIcon icon="fas fa-envelope" className="icon ic2"/>
                        <div className="text-info">
                            <h4 style={styles.p}>Email:</h4>
                            <h4>
                                <a style={styles.a}href="ayahshayk@gmail.com">ayahshayk@gmail.com</a>
                            </h4>
                        </div>
                    </div>

                    <div className="contact-text text3" >
                        <FontAwesomeIcon icon="fas fa-map-marked-alt" className="icon ic3"/>
                        <div className="text-info">
                            <h4 style={styles.p}>Location:</h4>
                            <h4>London, UK</h4>
                        </div>
                    </div>
                </aside>
            </section>
            <div className="connect-div">
                    <h2 className="sub-heading">Connect with me on Socials</h2>
                    <section className="icon-div">
                        <a href="https://instagram.com/"> 
                            <FontAwesomeIcon  icon="fa-brands fa-instagram" className="icon c-ig" />
                        </a> 
                        <a href="https://github.com/ayahxsheikh">
                            <FontAwesomeIcon icon="fab fa-github" className="icon c-gh"/>
                        </a> 
                        <a href="https://linkedin.com/"> 
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icon c-in"/>
                        </a> 
                    </section> 
                </div>  
     </main>
        </>
    )
}

export default Contact
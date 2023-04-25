import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(){
    return (
        <footer>
            {/* <p><a href="https://www.freepik.com/free-vector/collection-designer-work_5030709.htm#&position=0&from_view=undefined">Image by pikisuperstar</a> on Freepik</p> */}

                <h3>Connect with me on Socials</h3>
                <section className="icon-div">
                    <a href="https://github.com/ayahxsheikh">
                            <FontAwesomeIcon icon="fab fa-github" className="icon gh" size="lg"/>
                        </a> 
                        <a href="https://instagram.com/"> 
                            <FontAwesomeIcon  icon="fa-brands fa-instagram" className="icon ig" size="lg" />
                        </a> 
                        {/* <a href="https://twitter.com/">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" className="icon tw" size="lg"/>
                        </a>  */}
                        <a href="https://linkedin.com/"> 
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icon in" size="lg"/>
                        </a> 
                </section> 
        </footer>
    )
}

export default Footer;
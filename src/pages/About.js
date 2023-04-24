import '../styles/about.css'
import cssLogo from '../assets/cssLogo.jpg'
import htmlLogo from '../assets/htmlLogo.jpg'


function About(){
    return (
      
      <main className="aboutBg aboutWrapper">

        <section className="my-info">
        <h3> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe veritatis perspiciatis quibusdam eius inventore numquam fugit. Obcaecati earum at ipsam cupiditate, debitis, doloremque, facere dolores molestiae omnis eius laudantium! Amet. </h3>
        </section>

        <section className="tech-skills">
            <h3 className='techH3'>Technologies I work with:</h3>
            <div className="tech-logos">
                <img className="html" src={htmlLogo} alt="html-logo" />
                <img className="css" src={cssLogo} alt="css-logo" />

            </div>
        </section>
      </main>
      
    )
}

export default About;
import '../styles/about.css'
import cssLogo from '../assets/logos/cssLogo.jpg'
import htmlLogo from '../assets/logos/htmlLogo.jpg'
import jsLogo from '../assets/logos/jsLogo.jpg'
import btstrapLogo from '../assets/logos/btstrapLogo.jpg'
import jqueryLogo from '../assets/logos/jqueryLogo.jpg'
import gitLogo from '../assets/logos/gitLogo.jpg'
import nodejsLogo from '../assets/logos/nodejsLogo.png'
import npmLogo from '../assets/logos/npmLogo.jpg'
import githubLogo from '../assets/logos/githubLogo.jpg'
import reactLogo from '../assets/logos/reactLogo.jpg'

import girl2 from '../assets/images/girl2.png'

function About(){
    return (
      
      <main className="aboutBg aboutWrapper">

        <h1 className='about-title'>Get to Know Me</h1>
        <section className="about-section">
            <img className="about-img" src={girl2} alt="girl"/> 
            <div className="about-info"> 
                <h3>Expanding my skillset as a Front-end Developer with a background in Politics and International Relations.</h3>
                <h3>My passion for Front-end Web Development started with a desire to bring my creativity to life.</h3>
                <h3>I bring an enthusiastic and detailed perspective to create websites.</h3>
                {/* <h3>Outside the world of coding I am an animal lover and enjoy painting.</h3> */}
                <div className="cv-sec">
                    <h3 className='cv-title'>Find out more and download my cv</h3>
                    <a href="assets/cv/ASheikhCV.pdf" download="Ayah Sheikh CV">
                        <button className="cvBtn">View CV</button>
                    </a>
                </div>
            </div>
        </section>


        <section className="skills-section">
            <h4 className="skills-title">Technologies and Tools</h4>
            <div className="techLogos1">
                <figure>
                    <img className="html" src={htmlLogo} alt="html-logo" />
                    <figcaption className="iconText">HTML</figcaption>
                </figure>
                <figure>
                    <img className="css" src={cssLogo} alt="css-logo" />
                    <figcaption className="iconText">CSS</figcaption>
                </figure>
                <figure>
                    <img className="js" src={jsLogo} alt="js-logo" />
                    <figcaption className="iconText">JavaScript</figcaption>
                </figure>
                <figure>
                    <img className="jquery" src={jqueryLogo} alt="jq-logo" />
                    <figcaption className="iconText">jQeury</figcaption>
                </figure>
                <figure>
                        <img className="react" src={reactLogo} alt="react-logo" />
                        <figcaption className="iconText">React</figcaption>
                    </figure>
                <figure>
                    <img className="git" src={gitLogo} alt="git-logo" />
                    <figcaption className="iconText">GIT</figcaption>
                </figure>
                <figure>
                    <img className="npm" src={npmLogo} alt="npm-logo" />
                    <figcaption className="iconText">NPM</figcaption>
                </figure>
                <figure>
                    <img className="node" src={nodejsLogo} alt="node-logo" />
                    <figcaption className="iconText">NodeJS</figcaption>
                </figure>
                <figure>
                    <img className="github" src={githubLogo} alt="github-logo" />
                    <figcaption className="iconText">GitHub</figcaption>
                </figure>
                  
                <figure>
                    <img className="bootstrap" src={btstrapLogo} alt="bootstrap-logo" />
                    <figcaption className="iconText">Bootstrap</figcaption>
                </figure>
            </div>
        </section>
      </main>
      
    )
}

export default About;
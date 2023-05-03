import '../styles/about.css'
import cssLogo from '../assets/logos/cssLogo.jpg'
import htmlLogo from '../assets/logos/htmlLogo.jpg'
import jsLogo from '../assets/logos/jsLogo.jpg'
import btstrapLogo from '../assets/logos/btstrapLogo.jpg'
import jqueryLogo from '../assets/logos/jqueryLogo.jpg'
import gitLogo from '../assets/logos/gitLogo.jpg'
import vsLogo from '../assets/logos/vsLogo.jpg'
import nodejsLogo from '../assets/logos/nodejsLogo.png'
import npmLogo from '../assets/logos/npmLogo.jpg'
import githubLogo from '../assets/logos/githubLogo.jpg'
import reactLogo from '../assets/logos/reactLogo.jpg'

import test1 from '../assets/test1.png'

function About(){
    return (
      
      <main className="aboutBg aboutWrapper">

        <h1 className='about-title'>Get to Know Me</h1>
        <section className="about-section">
        <img className="about-img" src={test1} /> 
        <div className="about-info"> 
            <h3>Front-end Developer with a background in Politics and International Relations bringing a unique and detal-oritentated perspective to create websites. My passion for Front-end Web Development started with a desire to bring my creativity to life. I am continuing to learn and expand my skillset</h3>
            <h3>Outside the world of coding I am an animal lover and enjoy painting.</h3>
            <div className="cv-sec">
                <h3 className='cv-title'>Find out more and download my resume</h3>
                <a href="assets/cv/Resume.pdf" download="Ayah Sheikh CV">
                    <button className="cvBtn">Download my CV</button>
                </a>
            </div>
        </div>

        </section>


        <section className="skills-section">
            <h4 className="skills-title">Technologies and Tools</h4>
            <div className="techLogos1">
                <figure>
                    <img className="html" src={htmlLogo} alt="html-logo" />
                    <figcaption>HTML</figcaption>
                </figure>
                <figure>
                    <img className="css" src={cssLogo} alt="css-logo" />
                    <figcaption>CSS</figcaption>
                </figure>
                <figure>
                    <img className="js" src={jsLogo} alt="js-logo" />
                    <figcaption>JavaScript</figcaption>
                </figure>
                <figure>
                    <img className="jquery" src={jqueryLogo} alt="jq-logo" />
                    <figcaption>jQeury</figcaption>
                </figure>
                <figure>
                        <img className="react" src={reactLogo} alt="react-logo" />
                        <figcaption>React</figcaption>
                    </figure>
           
                {/* <figure>
                    <img className="vs" src={vsLogo} alt="vs-logo" />
                    <figcaption>VS Code</figcaption>
                </figure> */}

                <figure>
                    <img className="git" src={gitLogo} alt="git-logo" />
                    <figcaption>GIT</figcaption>
                </figure>
                <figure>
                    <img className="npm" src={npmLogo} alt="npm-logo" />
                    <figcaption>NPM</figcaption>
                </figure>
                <figure>
                    <img className="node" src={nodejsLogo} alt="node-logo" />
                    <figcaption>NodeJS</figcaption>
                </figure>
                <figure>
                    <img className="github" src={githubLogo} alt="github-logo" />
                    <figcaption>GitHub</figcaption>
                </figure>
                  
                <figure>
                    <img className="bootstrap" src={btstrapLogo} alt="bootstrap-logo" />
                    <figcaption>Bootstrap</figcaption>
                </figure>
            </div>
        </section>

        {/* <div className="cv-sec">
                    <h3>Alternatively you can download my resume</h3>
                    <a href="assets/cv/Resume.pdf" download="Ayah Sheikh CV">
                        <button className="cvBtn">Download my CV</button>
                    </a>
                </div> */}

      </main>
      
    )
}

export default About;
import '../styles/about.css'
import cssLogo from '../assets/cssLogo.jpg'
import htmlLogo from '../assets/htmlLogo.jpg'
import jsLogo from '../assets/jsLogo.jpg'
import btstrapLogo from '../assets/btstrapLogo.jpg'
import jqueryLogo from '../assets/jqueryLogo.jpg'
import gitLogo from '../assets/gitLogo.jpg'
import vsLogo from '../assets/vsLogo.jpg'
import nodejsLogo from '../assets/nodejsLogo.png'
import npmLogo from '../assets/npmLogo.jpg'
import githubLogo from '../assets/githubLogo.jpg'
import reactLogo from '../assets/reactLogo.jpg'


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
                <img className="js" src={jsLogo} alt="js-logo" />
                <img className="bootstrap" src={btstrapLogo} alt="bootstrap-logo" />
                <img className="jquery" src={jqueryLogo} alt="jq-logo" />
                <img className="vs" src={vsLogo} alt="vs-logo" />
                <img className="git" src={gitLogo} alt="git-logo" />
                <img className="node" src={nodejsLogo} alt="node-logo" />
                <img className="npm" src={npmLogo} alt="npm-logo" />
                <img className="github" src={githubLogo} alt="github-logo" />
                <img className="react" src={reactLogo} alt="react-logo" />

            </div>
        </section>
      </main>
      
    )
}

export default About;
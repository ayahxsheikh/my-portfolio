// import codegirl from '../assets/test1.jpg'

const style = {
    text: {
        lineHeight: '1rem'
    },
    pText: {
        lineHeight: '1.5rem'
    }
}
function Home(){
    return(
    <main className="mainBg mainWrapper">
        <p style={style.pText}>Hey, I'm Ayah</p>
        <p className="m-title">Frontend</p>
        <p className="m-title"> Web Developer</p> 
        <p style={style.text}>I code simple and beautiful web applications</p>
        {/* <img src={codegirl} className="codegirl" alt="girl" /> */}
    </main>

    )
}

export default Home;
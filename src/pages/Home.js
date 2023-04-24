// import Header from "../components/Header";

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
    <main className="mainBg">
        <p style={style.pText}>Hey, I'm Ayah</p>
        <p className="title">Frontend</p>
        <p className="title"> Web Developer</p> 
        <p style={style.text}>I code simple and beautiful web applications</p>
    </main>

    )
}

export default Home;
// import Header from "../components/Header";

const style = {
    text: {
        lineHeight: '2rem'
    },
    pText: {
        lineHeight: '1.5rem'
    }
}
function Home(){
    return(
    <>
    <main>
        <p style={style.pText}>Hey, I'm Ayah</p>
        <p className="title">Frontend</p>
        <p className="title"> Web Developer</p> 
        <p style={style.text}>I design and code immersive web applications | UI/UX Designer</p>
    </main>

    </>

    )
}

export default Home;
// import "./components/styles/Hero.css";

const Hero = ({title})=> {
    return (
        <section className="hero hero-slide-1">
            <div className="hero-container">
            <article className="hero-container__text-box">
            <h1>{title}</h1>
            <p>
                <strong>Batman Store </strong>
                en la tienda online mas grande de latinoamerica
                <p>Aqui encontraras todos los coleccionables.</p>
            </p>
            <button className="button-primary">Comprar</button>
            </article>
            </div>
        </section>
    )
}

export default Hero
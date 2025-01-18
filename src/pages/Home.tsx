    import { useTranslation } from "react-i18next";
    import { IoLogoVercel } from "react-icons/io5";
    import { PiGithubLogoFill } from "react-icons/pi";
    import { ImLinkedin2 } from "react-icons/im";
    const Home = () => {
    const { t } = useTranslation();

    return (
        <div
        className="min-h-screen flex flex-col items-center text-white relative"
        style={{
            background: "radial-gradient(circle, #004d39, #001a13, #000000)", // Fondo negro con centro verde
            fontFamily: "'Poppins', sans-serif",
        }}
        >
        {/* Contenido */}
        <main className="flex flex-col lg:grid lg:grid-cols-2  items-center px-6 lg:px-32 w-full pt-28 py-12 lg:pt-36">
            {/* Texto */}
            <div className="text-center lg:text-left lg:pt-18 lg:ml-28 order-2 lg:order-none">
                <h1 className="text-3xl lg:text-3xl -mt-4 font-extrabold mb-4  efecto-neon">
                    {t("motivation")}
                </h1>
                <h2 className="text-2xl lg:text-3xl  font-bold mb-6 text-white"
                style={{
                    color: "#ffffff",
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
                }}>
                    {t("home")}
                </h2>
                <p className="text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 text-justify leading-relaxed text-white">
                    {t("textOne")}
                </p>
                {/* Botón de contacto */}
                <div className="mt-12 flex justify-center">
                    <a
                    href="/contact" // Redirige a la sección de contacto
                    className=" contact-button neon-container text-black font-bold py-3 px-6 rounded-full shadow-md hover:scale-105"
                    >
                    {t("titleContact")}
                    </a>
                </div>
            </div>

            {/* Imagen del oso */}
            <div
            className="user-oso flex justify-center items-center order-1 lg:order-none"
            style={{
                
                height: "28rem", // Altura proporcional
                backgroundSize: "contain", // Ajustar la imagen sin recortarla
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            ></div>
        </main>

        {/* Redes sociales */}
        <section className="lg:mt-1 mt-16 text-center">
            <h3
            className="text-lg font-semibold mb-5 text-white tracking-wide"
            style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 300, // Light
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                letterSpacing: "0.05em",
            }}
            >
            {t("redes")}
            </h3>
            <div className="flex justify-center space-x-10">
            {/* GitHub */}
            <a
                href="https://github.com/DiegoEspx"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-container button-effect text-2xl icon-container bg-white hover:bg-black"
            >
                <PiGithubLogoFill className="icon"/>
            </a>
            {/* LinkedIn */}
            <a
            href="https://www.linkedin.com/in/diego-espa%C3%B1a-9b801a1ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-container button-effect text-xl icon-container bg-white hover:bg-black"
            >
            <ImLinkedin2 className="icon" />
            </a>
            {/* Gmail */}
            <a
                href="https://vercel.com/diegos-projects-9d766936"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-container button-effect text-xl icon-container bg-white hover:bg-black"
            >
                <IoLogoVercel className="icon" />
            </a>
            </div>
        </section>

        {/* Derechos reservados */}
        <footer className="mt-16 mb-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados. Dalejo España.
        </footer>
        </div>
    );
    };

    export default Home;

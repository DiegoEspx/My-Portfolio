import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoVercel } from "react-icons/io5";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-black px-4 py-12 text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Contenedor principal */}
      <div className="flex flex-col lg:mt-24 lg:flex-row items-center w-full max-w-6xl">
        {/* Imagen del oso */}
        <div
          className="user-oso flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0"
          style={{
            height: "28rem",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "scaleX(-1)",
          }}
        ></div>

        {/* Contenido */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left px-4">
          {/* Título principal */}
          <header className="mb-6">
            <h1 className="text-3xl lg:text-5xl font-bold text-teal-400 mb-4">
              {t("contact")}
            </h1>
            <p className="text-base lg:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              {t(
                "finalText"
              )}
            </p>
          </header>
          {/* Opciones de contacto */}
          <section className="flex flex-col gap-4 items-center">
            <div className="flex gap-5">
              {/* Correo electrónico */}
              <a
                href="mailto:dalejo.espana@gmail.com"
                className="flex final-button px-2 py-1 neon-container shadow-md hover:scale-105 gap-1 lg:py-2 "
              >
                <MdEmail className="text-2xl lg:text-2xl" />
                <span className="text-sm lg:text-base font-medium">{t('email')}</span>
              </a>
              {/*Whatsapp */}
              <a
                  href="https://wa.me/573127261552?text=%C2%A1Saludos!%20%F0%9F%91%8B%20Estoy%20interesado%20en%20tus%20servicios.%20%F0%9F%92%BC%20%C2%BFPodr%C3%ADas%20brindarme%20m%C3%A1s%20informaci%C3%B3n?%20%F0%9F%93%A9%20Muchas%20gracias!%20%F0%9F%98%81
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex final-button px-2 neon-container shadow-md hover:scale-105 gap-2"
              >
                  <FaWhatsapp className="text-2xl lg:text-2xl" />
                  <span className="text-sm lg:text-base font-medium">WhatsApp</span>
              </a>
            </div>
            {/* Ubicación */}
            <div className="flex items-center py-1 px-2 rounded-xl lg:w-auto justify-center lg:justify-start">
              <MdLocationOn className="text-2xl lg:text-2xl mr-3 text-teal-400" />
              <span className="text-sm text-gray-300">Colombia-Nariño-Pasto</span>
            </div>
          </section>
        </div>
        
      </div>
      {/* Redes sociales */}
      <section className="lg:mt-6 mt-16 text-center">
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
            href="https://www.linkedin.com/in/dalejo-espana/"
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
          © {new Date().getFullYear() } 
          {t("copy")}
        </footer>
    </div>
  );
};

export default Contact;

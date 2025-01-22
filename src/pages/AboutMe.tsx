//tiempo libre
import calistenia from "../img/calistenia.webp";
import gym from "../img/gym.webp";
import musica from "../img/musica.webp";
import videojuego from "../img/videojuego.webp"
//tiempo acompañado
import amigos from "../img/amigos.webp";
import comida from "../img/comida.webp";
import jugando from "../img/jugando.webp";
import futbol from "../img/futbol.webp"

import { PiGithubLogoFill } from "react-icons/pi";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoVercel } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  const hobbies = [t("hobbie1"), t("hobbie2"), t("hobbie3"), t("hobbie4")];
  const neonColors = ["#FF1111", "#00FFFF", "#FFD700", "#ADFF2F"];

  return (
    <div
      className="min-h-screen flex flex-col text-white relative px-6 lg:px-20"
      style={{
        background: "radial-gradient(circle, #000000, #001a13, #001B34)", // Fondo con degradado negro, verde y azul
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Introducción */}
      <section className="text-center mt-36">
        <h1
          className="text-5xl font-extrabold mb-8"
          style={{
            color: "#81FFC3",
            textShadow: "0 0 10px #00FFAE",
          }}
        >
          {t("aboutTitle")}
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-300 "
          style={{
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          {t("descriptionAbout")}
        </p>
      </section>

      {/* Hobbies */}
      <section className="mt-14">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{
            color: "#00FFAE",
            textShadow: "0 0 10px #00FFAE, 0 0 15px #81FFC3",
          }}
        >
          {t("hobbies")}
        </h2>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="h-40 w-40 bg-black rounded-xl shadow-lg flex items-center text-center justify-center mt-7"
              style={{
                border: `2px solid ${neonColors[index % neonColors.length]}`,
                boxShadow: `0 0 15px ${neonColors[index % neonColors.length]}`,
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <span className="text-xl font-semibold" style={{ color: neonColors[index % neonColors.length] }}>
                {hobby}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Tiempo Libre */}
<section className="flex flex-wrap lg:flex-nowrap items-center justify-center mt-20 gap-10">
  {/* Texto */}
  <div className="lg:w-1/2 lg:order-2">
    <h3
      className="text-3xl font-bold mb-4"
      style={{
        color: "#00BFFF",
        textShadow: "0 0 38px #00BFFF, 0 0 10px #1E90FF",
      }}
    >
      {t("freeTime")}
    </h3>
    <p className="text-lg leading-relaxed text-gray-300 text-justify ">
      {t("textAbout1")}
    </p>
  </div>
  {/* Fotos */}
  <div className="lg:w-1/2 lg:order-1 grid grid-cols-2 gap-4">
    {[gym, musica, videojuego, calistenia].map((image, index) => (
      <img
        key={index}
        src={image} // Usa la imagen importada
        alt={`Tiempo libre ${index + 1}`} // Texto alternativo
        className="h-56 w-full object-cover rounded-lg shadow-lg"
      />
    ))}
  </div>
</section>


      {/* Tiempo Acompañado */}
      <section className="flex flex-col lg:flex-row-reverse items-center mt-20 gap-10">
        {/* Texto */}
        <div className="lg:w-1/2 lg:order-2">
          <h3
            className="text-3xl font-bold mb-4"
            style={{
              color: "#FF4500",
              textShadow: "0 0 15px #FF4500, 0 0 30px #FF6347",
            }}
          >
            {t("accompaniedTime")}
          </h3>
          <p className="text-lg leading-relaxed text-gray-300 text-justify">
            {t("textAbout2")}
          </p>
        </div>
        {/* Fotos */}
        <div className="lg:w-1/2 lg:order-1 grid grid-cols-2 gap-4">
          {[amigos, comida, jugando, futbol].map((image, index) => (
            <img
              key={index}
              src={image} // Usa la imagen importada
              alt={`Tiempo libre ${index + 1}`} // Texto alternativo
              className="h-56 w-full object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Algoritmia */}
      <section className="text-center my-16">
        <h2
          className="text-4xl font-bold mb-6"
          style={{
            color: "#9400D3",
            textShadow: "0 0 10px #9400D3, 0 0 20px #8A2BE2",
          }}
        >
          {t("interestSoftware")}
        </h2>
        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300 text-justify"
          style={{
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          {t("textAbout3")}
        </p>
      </section>
      {/* Redes sociales */}
              <section className="lg:mt-6 text-center">
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
                      © {new Date().getFullYear() } 
                      {t("copy")}
                  </footer>
    </div>
  );
};

export default AboutMe;

import { useTranslation } from "react-i18next";
import { IoLogoVercel } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { PiGithubLogoFill } from "react-icons/pi";

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and contact information.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/your-portfolio-repo",
    },
    {
      title: t("proyectTitle2"),
      description:
        t("proyectDescription2"),
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/DiegoEspx/GymApp",
    },
    {
      title: t("proyectTitle3"),
      description:
      t("proyectDescription3"),  
      technologies: ["Python", "Django", "DRF", "Azure", "Postgres"],
      github: "https://github.com/DiegoEspx/Back-Gestion-Salas.git",
    },
    { 
      title: t("proyectTitle4"),
      description:
      t("proyectDescription4"),  
      technologies: ["React", "Typescript", "Tailwind CSS","Vite"],
      github: "https://github.com/DiegoEspx/Front-Gestion-Salas",
    },
    {
      title: t("proyectTitle5"),
      description:
      t("proyectDescription5"),  
      technologies: ["Java"],
      github: "https://github.com/DiegoEspx/Control-Recetas-Ingredientes-.git",
    },
    
  ];

  const neonColors = ["#00C9FF", "#00FF94", "#FFD700", "#B15DFF", "#FF5733", "#33FF57", "#57D3FF", "#FF33A6"];// Tonos suaves que combinan con el fondo

  return (
    <div
      className="min-h-screen flex flex-col items-center text-white px-6 lg:px-20 pt-32"
      style={{
        background: "linear-gradient(135deg, #102F2D, #081C1A)", // Fondo verde oscuro
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Título principal */}
      <div className="text-center mb-12">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl lg:mb-8 font-bold mb-4"
          style={{ color: "#81FFC3" }} 
        >
          {t("proyect")}
        </h1>
        <p className="text-sm mb-3 md:text-xl lg:text-base md:mb-4 lg:mb-8 max-w-lg mx-auto">
          {t("proyectDescription")}
        </p>
      </div>
      {/* Sección de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-10 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-6 relative hover:scale-105 transition-transform duration-300"
            style={{
              border: `2px solid ${neonColors[index % neonColors.length]}`,
              background: `linear-gradient(145deg, ${neonColors[index % neonColors.length]}20, #081C1A)`,
              boxShadow: `0 0 10px ${neonColors[index % neonColors.length]}50`,
            }}
          >
            <div
              className="absolute inset-0 z-[-1] rounded-lg blur-sm animate-pulse"
              style={{
                background: `radial-gradient(circle, ${neonColors[index % neonColors.length]}30, transparent)`,
              }}
            ></div>
            {/* Título del proyecto */}
            <h2
              className="md:text-xl lg:text-2xl font-bold mb-2"
              style={{ color: neonColors[index % neonColors.length] }}
            >
              {project.title}
            </h2>
            {/* Descripción */}
            <p className="text-gray-300 text-justify text-sm lg:text-base mb-4">{project.description}</p>
            {/* Tecnologías */}
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2" style={{ color: neonColors[index % neonColors.length] }}>
                {t("tecnologias")}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-sm bg-[#102F2D] text-[#81FFC3] px-3 py-1 rounded-full"
                    style={{
                      border: `1px solid ${neonColors[index % neonColors.length]}`,
                      boxShadow: `0 0 5px ${neonColors[index % neonColors.length]}30`,
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-4 px-4 py-2 rounded-lg bg-[#00C9FF] text-[#102F2D] font-semibold"
              style={{
                boxShadow: `0 4px 10px ${neonColors[index % neonColors.length]}40`,
                transition: "transform 0.3s",
              }}
            >
              <PiGithubLogoFill className="text-xl mr-2" />
              {t("Viewgithub")}
            </a>
          </div>
        ))}
      </div>
      
    {/* Redes sociales */}
                  <section className="mt-16 text-center">
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

export default Projects;

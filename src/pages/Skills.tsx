import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaJava, FaGit, FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiAngular, SiTailwindcss, SiTypescript, SiPrisma, SiVite, SiDocker, SiPostgresql, SiMysql, SiVercel, SiFlutter, SiDjango, SiFirebase } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";

const Skills = () => {
  const { t } = useTranslation();
  const skillGroups = [
    {
      group: "Frontend Development",
      icon: <FaReact />,
      description: "Technologies for building visually appealing and interactive user interfaces.",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, color: "#FF5733" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#007BFF" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38BDF8" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      ],
    },
    {
      group: "Backend Development",
      icon: <FaPython />,
      description: "Tools and frameworks for building powerful server-side applications.",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#306998" },
        { name: "Django", icon: <SiDjango />, color: "#1DBF73" }, 
        { name: "Java", icon: <FaJava />, color: "#F89820" },
        { name: "Prisma", icon: <SiPrisma />, color: "#e200e6" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      ],
    },
    {
      group: "Databases",
      icon: <SiPostgresql />,
      description: "Technologies for efficient data storage and management.",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      ],
    },
    {
      group: "Version Control & Others",
      icon: <FaGithub />,
      description: "Essential tools for collaboration, version control, and deployment.",
      skills: [
        { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
        { name: "Azure", icon: <VscAzure />, color: "#0078D7" },
        { name: "Git", icon: <FaGit />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#5500de" },
        { name: "Flutter", icon: <SiFlutter />, color: "#02569B" }, 
      ],
    },
  ];

  const [activeGroup, setActiveGroup] = useState(skillGroups[0].group);

  return (
    <div
      className="min-h-screen flex flex-col items-center text-white px-6 lg:px-20 pt-32 relative"
      style={{
        background: "radial-gradient(circle, #001B34, #004d39, #000000)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Título principal */}
      <div className="text-center mb-10 mt-5">
        <h1
          className="text-5xl font-bold"
          style={{
            color: "#81FFC3",
          }}
        >
          Skills
        </h1>
      </div>

      {/* Barra de navegación*/}
      <div className="flex flex-wrap justify-center -mt-11 lg:-mt-4 mb-8 space-x-2 ">
        {skillGroups.map((group) => (
          <button
            key={group.group}
            onClick={() => setActiveGroup(group.group)}
            className={`mt-4 flex items-center px-4 py-4 lg:px-3 lg:py-2 rounded-full font-semibold text-sm md:text-lg transition ${
              activeGroup === group.group
                ? "bg-[#81FFC3] text-[#001B34] shadow-lg"
                : "bg-[#081C1A] text-[#81FFC3] hover:bg-[#102F2D]"
            }`}
            style={{
              boxShadow:
                activeGroup === group.group
                  ? "0 0 15px rgba(129, 255, 195, 0.7)"
                  : "none",
            }}
          >
            <span className="text-xl md:mr-2">{group.icon}</span>
            <span className="hidden md:inline">{group.group}</span>
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="w-full max-w-7xl">
        {skillGroups
          .filter((group) => group.group === activeGroup)
          .map((group) => (
            <div key={group.group} className="text-center">
              <p
                className="text-lg mb-6"
                style={{
                  color: "#B0EACD",
                }}
              >
                {group.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center rounded-lg p-6 shadow-lg transition-transform hover:scale-110"
                    style={{
                      background: `linear-gradient(145deg, ${skill.color}30, #081C1A)`,
                      border: `2px solid ${skill.color}`,
                      boxShadow: `0 4px 15px ${skill.color}80`,
                    }}
                  >
                    {/* Ícono */}
                    <div className="mb-4 text-4xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    {/* Nombre de la habilidad */}
                    <p
                      className="text-lg font-semibold"
                      style={{
                        color: "#81FFC3",
                      }}
                    >
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
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
              <footer className="mt-10 mb-6 text-center text-gray-400 text-sm">
                  © {new Date().getFullYear()} Todos los derechos reservados. Dalejo España.
              </footer>
    </div>
  );
};

export default Skills;

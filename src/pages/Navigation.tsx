    import { useState } from "react";
    import { Link, useLocation } from "react-router-dom"; // Importar useLocation
    import { HiOutlineChevronDown } from "react-icons/hi"; // Icono para desplegable
    import { FaBars, FaTimes } from "react-icons/fa"; // Iconos para el menú desplegable
    import { useTranslation } from "react-i18next";
    import i18n from "../i18n"; // Asegúrate de que esta ruta sea la correcta

    export function Navigation() {
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú lateral
    const location = useLocation();
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng); // Cambiar idioma en i18n
        console.log(`Idioma cambiado a: ${lng}`);
        setLanguageMenuOpen(false); // Cierra el menú al seleccionar un idioma
    };

    // Lista de rutas con traducción
    const routes = [
        { path: "/", label: t("titleHome") },
        { path: "/about-me", label: t("titleAboutMe") },
        { path: "/projects", label: t("titleProjects") },
        { path: "/skills", label: t("titleSkills") },
        { path: "/contact", label: t("titleContact") },
    ];

    const currentLanguage = i18n.language; // Obtener el idioma actual
    const flagSrc =
        currentLanguage === "en"
        ? "https://flagcdn.com/w40/us.png"
        : "https://flagcdn.com/w40/es.png";

    return (
        <>
        {/* Barra de navegación para pantallas grandes */}
        <nav className="hidden lg:flex fixed w-full px-10 py-10 z-50 bg-transparent text-white items-center justify-between">
            {/* Parte izquierda */}
            <Link
            to="/"
            className="tracking-wide animate-glow pl-10" // Clase para animación
                style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.3rem", // Tamaño del texto
                fontWeight: "bold",
                color: "#ffffff", // Blanco para el texto base
                }}

            >
            Dalejo España
            </Link>

            {/* Pestañas centradas */}
            <ul className="flex gap-8 text-lg font-semibold">
            {routes.map((route, index) => {
                const isActive =
                location.pathname === route.path ||
                (location.pathname === "/" && route.label === t("titleHome"));

                return (
                <li key={index}>
                    <Link
                    to={route.path}
                    className={`efecto-neon transition-transform relative group ${
                        isActive ? "active-link" : ""
                    }`}
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                    }}
                    >
                    {route.label}
                    {/* Línea animada */}
                    <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                    </Link>
                </li>
                );
            })}
            </ul>

            {/* Parte derecha: Selector de idioma y usuario */}
            <div className="flex items-center space-x-6 mr-10">
            {/* Selector de idioma */}
            <div className="relative">
                <button
                className="flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-md hover:bg-gray-800"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                >
                <img
                    src={flagSrc}
                    alt={currentLanguage === "en" ? "English" : "Español"}
                    className="w-6 h-6 rounded-full"
                />
                <HiOutlineChevronDown />
                </button>
                {languageMenuOpen && (
                <div className="absolute top-full mt-2 -ml-2.5 bg-gray-800/90 text-white rounded-lg shadow-lg overflow-hidden">
                    <button
                    className="flex items-center px-2 mr-6 py-2 w-full hover:bg-gray-700/60"
                    onClick={() => changeLanguage("en")}
                    >
                    <img
                        src="https://flagcdn.com/w40/us.png"
                        alt="English"
                        className="w-5 h-5 mr-2"
                    />
                    English
                    </button>
                    <button
                    className="flex items-center px-2 py-2 w-full hover:bg-gray-700/60"
                    onClick={() => changeLanguage("es")}
                    >
                    <img
                        src="https://flagcdn.com/w40/es.png"
                        alt="Español"
                        className="w-5 h-5 mr-2"
                    />
                    Español
                    </button>
                </div>
                )}
            </div>

            {/* Icono del usuario */}
            <div
                className="user-icon w-10 h-10 rounded-full shadow-md hover:scale-105 transition-transform cursor-pointer bg-transparent"
                title="User Icon"
            ></div>
            </div>
        </nav>

        {/* Barra de navegación para pantallas pequeñas */}
        <div className="lg:hidden fixed top-0 left-0 w-full px-4 py-8 z-50 flex items-center justify-between text-white bg-transparent">
            {/* Nombre a la izquierda */}
            <Link
            to="/"
            className="text-lg font-bold tracking-wide animate-glow"
            style={{
                fontSize: "1.1rem", // Tamaño del texto
                fontWeight: "bold",
                color: "#ffffff", // Blanco para el texto base
                }}
            >
            Dalejo España
            </Link>

            {/* Selector de idioma */}
            <div className="">
            <button
                className="flex items-center gap-2 px-2 py-2 mr-10  text-white rounded-full shadow-md hover:bg-gray-800"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
                <img
                src={flagSrc}
                alt={currentLanguage === "en" ? "English" : "Español"}
                className="w-6 h-6 rounded-full"
                />
                <HiOutlineChevronDown />
            </button>
            {languageMenuOpen && (
                <div className="absolute top-full  -mt-10 -ml-3.5 bg-gray-800/90 text-white rounded-lg shadow-lg overflow-hidden">
                <button
                    className="flex items-center px-2 py-2 w-full hover:bg-gray-700/60"
                    onClick={() => changeLanguage("en")}
                >
                    <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="English"
                    className="w-5 h-5 mr-2"
                    />
                    English
                </button>
                <button
                    className="flex items-center px-2 py-2 w-full hover:bg-gray-700/60"
                    onClick={() => changeLanguage("es")}
                >
                    <img
                    src="https://flagcdn.com/w40/es.png"
                    alt="Español"
                    className="w-5 h-5 mr-2"
                    />
                    Español
                </button>
                </div>
            )}
            </div>

            {/* Icono del usuario */}
            <div
            className="user-icon w-10 h-10 rounded-full shadow-md hover:scale-105 transition-transform cursor-pointer bg-transparent"
            title="User Icon"
            ></div>

            {/* Botón hamburguesa */}
            <button
            className="text-white bg-transparent p-2 rounded-full shadow-lg transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </div>

        {/* Menú lateral desplegable */}
        <div
            className={`fixed top-0 left-0 h-full bg-black text-white z-30 transform transition-transform duration-400 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ width: "250px" }}
        >
            <div className="flex flex-col h-full">
            {/* Links del menú */}
            <ul className="flex flex-col gap-6 mt-28 px-6">
                {routes.map((route, index) => (
                <li key={index}>
                    <Link
                    to={route.path}
                    className="text-lg font-semibold transition-transform relative group efecto-neon"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                    >
                    {route.label}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </>
    );
    }

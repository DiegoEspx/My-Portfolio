import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
lng: 'es',
fallbackLng: 'es',
interpolation: {
    escapeValue: false,
},
resources: {
    en: {
    translation: {
        /*NavBar*/
        titleHome: `Home`,
        titleAboutMe: `About Me`,
        titleProjects: `Projects`,
        titleSkills: `Skills`,
        titleContact: `Contact`,
        /*Home*/
        motivation: "Coding Dreams and Solutions",
        home: '👋¡Hello! i am Diego',
        textOne: 'I am a software engineering student, I am passionate about algorithms and sports. I focus on software architecture, project management, programming and interface design.',
        
        /*About me*/
        aboutTitle: 'My World',
        descriptionAbout:'How good to see you! Here you can get to know me better, discover my passions, skills and the things that make me unique. I hope you enjoy exploring this space as much as I enjoy sharing it with you.',
        hobbies: 'My Hobbies',
        hobbie1: 'Train Gym',
        hobbie2: 'Listen to Music',
        hobbie3: 'Play Video Games',
        hobbie4: 'Learn to Cook and Eat',
        freeTime: 'Free Time',
        textAbout1: "In my free time I love playing video games, playing the guitar and listening to music, i am a music lover, at any moment i am accompanied by some melody. I also love food and training, i train weights and calisthenics, i consider training to be one of the best things that has happened to me, since it allows me to take care of my body and mind.",
        accompaniedTime: "Accompanied Time",
        textAbout2: "When I am with other people, I enjoy sharing simple but meaningful moments. I like to go for walks, talk, remember funny anecdotes, make jokes, eat together and play, whether it's video games or other activities. Being accompanied helps me release stress and feel relaxed.",
        interestSoftware: "My interest in Software",
        textAbout3:'I love algorithms, everything based on programming I like to learn, I love discovering new languages, putting them into practice. Creating page designs always caught my attention, the Frontend was the first thing I put into practice on this journey. I am also focused on software architecture, data science, creating projects, analyzing them, looking for problems and correcting them. I always like to try new things, continue progressing with what I am learning, and apply it upwards in the workplace.',
        //Project
        proyect:'Projects',
        proyectDescription:'These are some of my projects, where I combine innovation and passion for technology. Connect with me to create something amazing!',
        proyectTitle2:'Gym App Mobile Application',
        proyectDescription2:'A mobile application designed specifically for gym administration and management. Offers differentiated login for administrators and clients, providing customized functionalities based on role.',
        proyectTitle3:'Backend for Computer Room Manager',
        proyectDescription3:'Developed with Django and the Django REST Framework, it includes full CRUD capabilities, dynamic data updating using signals, and detailed endpoints to query busy and free computers and details of each room. Ideal for frontend integration and cloud deployment.',
        proyectTitle4:'Frontend for a Computer Room Manager',
        proyectDescription4:'Frontend with graphical interface for computer room management, including CRUD functions connected to a backend hosted in Azure. The application allows real-time data synchronization and offers a modern experience, optimized for usability and accessibility.',
        proyectTitle5:'Culinary Inventory and Recipe Management System (POO)',
        proyectDescription5:'Java system to manage ingredients, create recipes adjusted to costs and diners, and view recipe lists. Ideal for learning object-oriented programming with an interactive console menu.',
        tecnologias:'Technologies:',
        Viewgithub:'View on GitHub',
        //Skills
        skills: 'Skills',
        frontText: 'Frontend',
        frontText2: 'Technologies for building visually appealing and interactive user interfaces.',
        backText:'Backend',
        backText2:'Tools and frameworks for building powerful server-side applications.',
        baseDatos:'Databases',
        baseDatos2:'Technologies for efficient data storage and management.',
        other:'Version Control & Others',
        other2:'Essential tools for collaboration, version control, and deployment.',
        
        //Contact
        contact: 'Contact me',
        finalText: "If you have questions, proposals or just want to say hello, write to me!",
        email: 'Email',
        //redes y copy
        redes: 'My Networks',
        copy:' All rights reserved. Dalejo España.',
    },
    },
    es: {
    translation: {
        /*NavBar*/
        titleHome: `Inicio`,
        titleAboutMe: `Sobre Mi`,
        titleProjects: `Proyectos`,
        titleSkills: `Habilidades`,
        titleContact: `Contacto`,
        /*Home*/
        motivation: "Codificando Sueños y Soluciones",
        home: '👋 ¡Saludos! Soy Diego.',
        textOne: `Soy un apasionado estudiante de Ingeniería de Software con una profunda conexión por la algoritmia y el deporte. 
        Mi enfoque está en diseñar soluciones impactantes a través de la arquitectura de software, la gestión de proyectos, la programación y el diseño de interfaces intuitivas.`,
        
        /*About me*/
        aboutTitle: 'Mi Mundo',
        descriptionAbout:'¡Qué bueno verte! Aquí podrás conocerme mejor, descubrir mis pasiones, habilidades y las cosas que me hacen único. Espero que disfrutes explorando este espacio tanto como yo disfruto compartiéndolo contigo.',
        hobbies: 'Mis Hobbies',
        hobbie1: 'Entrenar Gimnasio',
        hobbie2: 'Escuchar Musica',
        hobbie3: 'Jugar Videojuegos',
        hobbie4: 'Aprender a Cocinar y Comer',
        freeTime: 'Tiempo Libre',
        textAbout1: "En mi tiempo líbre me encanta jugar videojuegos, tocar la guitarra y escuchar musica, soy un melómano, en cualquier momento estoy acompañado por alguna melodía. Tambien me encanta la comida y entrenar, entreno pesas y calistenia, considero que entrenar es una de las mejores cosas que me han sucedido, ya que me permite cuidar mi cuerpo y mente.",
        accompaniedTime: "Tiempo Acompañado",
        textAbout2: "Cuando estoy con otras personas, disfruto compartir momentos sencillos pero significativos. Me gusta salir a caminar, conversar, recordar anécdotas graciosas, hacer bromas, comer juntos y jugar, ya sea videojuegos u otras actividades. Estar acompañado me ayuda a liberar el estrés y sentirme relajado.",
        interestSoftware: "Mi interes por el Software",
        textAbout3:'Me encanta la algoritmia, todo en base a programación me gusta aprender, me encanta ir descubriendo nuevos lenguajes y ponerlos en práctica. Crear diseños de páginas siempre me llamó la atención, el Frontend fue lo primero que puse en práctica en esta travesía. También estoy enfocado en la arquitectura de software, ciencia de datos, crear proyectos, analizarlos, buscar problemas y corregirlos. Me gusta siempre intentar nuevas cosas, seguir progresando con lo que estoy aprendiendo, y aplicarlo de forma ascendente en el ámbito laboral.',
        //Project
        proyect:'Proyectos',
        proyectDescription:'Estos son unos de mis proyectos, donde combino innovación y pasión por la tecnología. ¡Conecta conmigo para crear algo increíble!',
        proyectTitle2:'Aplicacion Movil GymApp',
        proyectDescription2:'Una aplicación móvil diseñada específicamente para la administración y gestión de gimnasios. Ofrece inicio de sesión diferenciado para administradores y clientes, proporcionando funcionalidades personalizadas según el rol.',
        proyectTitle3:'Backend para Gestor de Salas de Computadoras',
        proyectDescription3:'Desarrollado con Django y Django REST Framework, incluye funcionalidades CRUD completas, actualización dinámica de datos mediante señales y endpoints detallados para consultar computadoras ocupadas, libres y detalles de cada sala. Ideal para integración con frontend y despliegue en la nube.',
        proyectTitle4:'Frontend para un Gestor de Salas de Computadoras',
        proyectDescription4:'Frontend con interfaz gráfica para la gestión de salas de computadoras, incluyendo funciones CRUD conectadas a un backend alojado en Azure. La aplicación permite sincronización de datos en tiempo real y ofrece una experiencia moderna, optimizada para usabilidad y accesibilidad.',
        proyectTitle5:'Sistema de Gestión de Inventarios y Recetas Culinarias (POO)',
        proyectDescription5:'Sistema en Java para gestionar ingredientes, crear recetas ajustadas a costos y comensales, y visualizar listas de recetas. Ideal para aprender programación orientada a objetos con un menú interactivo en consola.',
        tecnologias:'Tecnologias:',
        Viewgithub:'Ver en GitHub',
        //Skills
        skills: 'Habilidades',
        frontText: 'Frontend',
        frontText2: 'Tecnologías para construir interfaces de usuario visualmente atractivas e interactivas.',
        backText:'Backend',
        backText2:'Herramientas y Frameworks para crear potentes aplicaciones del lado del servidor.',
        baseDatos:'Base de Datos',
        baseDatos2:'Tecnologías para el almacenamiento y gestión eficiente de datos.',
        other:'Control de Versiones y Otros',
        other2:'Herramientas esenciales para colaboración, control de versiones e implementación.',
        
        //Contact
        contact: 'Contáctame',
        finalText: 'Si tienes dudas, propuestas o simplemente quieres saludar, ¡escríbeme!',
        email: 'Correo Electronico',
        //redes y copy
        redes: 'Mis Redes',
        copy:' Todos los derechos reservados. Dalejo España.',
    },
    }, 
},
});

export default i18n;
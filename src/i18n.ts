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
        textAbout1: "In my free time I love playing video games, playing the guitar and listening to music. I am a music lover, at any moment I am accompanied by some melody. I also love food and training. I train weights and calisthenics, I consider training to be one of the best things that has happened to me, since it allows me to take care of my body and mind.",
        accompaniedTime: "Accompanied Time",
        textAbout2: "When I am with other people, I enjoy sharing simple but meaningful moments. I like to go for walks, talk, remember funny anecdotes, make jokes, eat together and play, whether it's video games or other activities. Being accompanied helps me release stress and feel relaxed.",
        interestSoftware: "My interest in Software",
        textAbout3:'I love algorithms, everything based on programming I like to learn, I love discovering new languages, putting them into practice. Creating page designs always caught my attention, the Frontend was the first thing I put into practice on this journey. I am also focused on software architecture, creating projects, analyzing them, looking for problems and correcting them. I always like to try new things, continue progressing with what I am learning, and apply it upwards in the workplace.',
        //Project
        proyect:'My Projects',
        proyectTitle: 'Mercedario Restaurant',
        textProjectOne: 'Code to add, edit, delete, calculate prices, for ingredients and recipes handled by the restaurant (inventory).'
        ,
        //Skills
        skills: 'My Skills',
        frontText: 'My Frontend Skills:',
        backText:'My Backend Skills:',
        other:'Other Skills:',
        botonOther:'Other',
        //Contact
        contact: 'CONTACT',
        finalText: "Thank you for taking the time to get here. If you think I can be of use to your team or if you simply have any questions, do not hesitate to contact me. I'm here to help you in any way I can.",
        //redes y copy
        redes: 'My Networks',
        copy:'© 2025 All rights reserved. Dalejo España.',
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
        textAbout1: "En mi tiempo líbre me encanta jugar videojuegos, tocar la guitarra y escuchar musica. soy un melómano, en cualquier momento estoy acompañado por alguna melodía. tambien me encanta la comida y entrenar. entreno pesas y calistenia, considero que entrenar es una de las mejores cosas que me han sucedido, ya que me permite cuidar mi cuerpo y mente.",
        accompaniedTime: "Tiempo Acompañado",
        textAbout2: "Cuando estoy con otras personas, disfruto compartir momentos sencillos pero significativos. me gusta salir a caminar, conversar, recordar anécdotas graciosas, hacer bromas, comer juntos y jugar, ya sea videojuegos u otras actividades. Estar acompañado me ayuda a liberar el estrés y sentirme relajado.",
        interestSoftware: "Mi interes por el Software",
        textAbout3:'Me encanta la algoritmia, todo en base a programación me gusta aprender, me encanta ir descubriendo nuevos lenguajes, ponerlos en práctica. Crear diseños de páginas siempre me llamó la atención, el Frontend fue lo primero que puse en práctica en esta travesía. También estoy enfocado en la arquitectura de software, crear proyectos, analizarlos, buscar problemas y corregirlos. Me gusta siempre intentar nuevas cosas, seguir progresando con lo que estoy aprendiendo, y aplicarlo de forma ascendente en el ámbito laboral.',
        //Project
        proyect:'Mis Proyectos',
        proyectTitle:'Restaurante Mercedario',
        textProjectOne:'Codigo para agregar, editar, eliminar, calcular precios, para ingredientes y recetas que maneje el restaurante (inventario).',
        //Skills
        skills: 'Mis Habilidades',
        frontText: 'Mis habilidades en Frontend:',
        backText:'Mis habilidades en Backend:',
        other:'Otras habilidades:',
        botonOther:'Otros',
        //Contact
        contact: 'CONTACTO',
        finalText: 'Gracias por tomarte el tiempo de llegar hasta aquí. Si consideras que puedo ser de utilidad para tu equipo o si simplemente tienes alguna pregunta, no dudes en contactarme. Estoy aquí para ayudarte en todo lo que pueda.',
        //redes y copy
        redes: 'Mis Redes',
        copy:'© 2025 Todos los derechos reservados. Dalejo España.',
    },
    }, 
},
});

export default i18n;
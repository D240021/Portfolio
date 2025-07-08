import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const translations = {
  es: {
    // Header
    portfolio: "Mi Portafolio",
    lightMode: "Cambiar a tema claro",
    darkMode: "Cambiar a tema oscuro",

    // Hero Section
    name: "Daniel Barrantes Quirós",
    title: "Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales",
    location: "Cartago, Costa Rica",
    downloadCV: "Descargar CV",

    // About Section
    aboutTitle: "Sobre Mí",
    aboutText1:
      "Soy estudiante avanzado de Informática Empresarial en la Universidad de Costa Rica, apasionado por el aprendizaje y la innovación tecnológica. Disfruto del trabajo en equipo; siempre encontraré una persona proactiva y ética que encuentre soluciones a mis problemas 👨‍💻",
    aboutText2:
      "Siempre dando lo mejor de mi 🫡",

    // Technologies Section
    technologiesTitle: "Tecnologías que he utilizado",

    // Projects Section
    projectsTitle: "Mis Proyectos",
    repository: "Repositorio",
    viewSite: "Ver Sitio",

    // Contact Section
    contactTitle: "Contacto",
    contactText: "¿Interesado en trabajar juntos? ¡Me encantaría escuchar sobre tu proyecto!",
    sendEmail: "Enviar Email",
    connectLinkedIn: "Conectar en LinkedIn",

    // Footer
    footerText: "Todos los derechos reservados",

    // Download alert
    downloadAlert: "Descargando CV... (En una implementación real, se descargaría el archivo PDF)",
  },
  en: {
    // Header
    portfolio: "My Portfolio",
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode",

    // Hero Section
    name: "Daniel Barrantes Quirós",
    title: "Full Stack Developer passionate about creating exceptional digital experiences",
    location: "Cartago, Costa Rica",
    downloadCV: "Download CV",

    // About Section
    aboutTitle: "About Me",
    aboutText1:
      "I'm an advanced student of Business Informatics at the University of Costa Rica, passionate about learning and technological innovation. I enjoy teamwork; I can always find a proactive and ethical person who can find solutions to my problems 👨‍💻",
    aboutText2:
      "Always giving my best 🫡",

    // Technologies Section
    technologiesTitle: "Technologies that I have used",

    // Projects Section
    projectsTitle: "My Projects",
    repository: "Repository",
    viewSite: "View Site",

    // Contact Section
    contactTitle: "Contact",
    contactText: "Interested in working together? I'd love to hear about your project!",
    sendEmail: "Send Email",
    connectLinkedIn: "Connect on LinkedIn",

    // Footer
    footerText: "All rights reserved",

    // Download alert
    downloadAlert: "Downloading CV... (In a real implementation, the PDF file would be downloaded)",
  },
}

export const projectsData = {
  en: [
    {
      id: 1,
      name: "Cryptor Alura",
      description: "A web site that encrypts and decrypts a phrase by a simple algorithm. This project was made for challenge #1 by Alura.",
      technologies: ["JavaScript", "HTML", "CSS"],
      repositoryUrl: "https://github.com/D240021/encriptador-allura",
      websiteUrl: "https://d240021.github.io/encriptador-allura/"
    },
    {
      id: 2,
      name: "Guitar LA",
      description: "A simple guitar store website that allows you interact with a cart shopping.",
      technologies: ["React & TS", "TailwindCSS", "Vite"],
      repositoryUrl: "https://github.com/D240021/guitarLA-ts/tree/main",
      websiteUrl: "https://d240021.github.io/guitarLA-ts/index.html"
    },
    {
      id: 3,
      name: "Reportería ICE",
      description: "Web application developed for fault reporting for the Costa Rican Electricity Institute (ICE).",
      technologies: ["Angular 18 & TS", ".NET Entity Framework ORM & C#", "Bootstrap CSS"],
      repositoryUrl: "https://github.com/D240021/Reporteria-ICE",
      websiteUrl: "https://d240021.github.io/reporteriaICEFrontend"
    },
    {
      id: 4,
      name: "LiterAlura",
      description: "Web application built with Java and Spring Boot for managing books and authors. Developed for an Alura + Oracle challenge.",
      technologies: ["Java", "Spring Boot", "JPA", "H2 Database", "Maven"],
      repositoryUrl: "https://github.com/D240021/LiterAlura",
      websiteUrl: null
    },
    {
      id: 5,
      name: "Java Currency Converter",
      description: "Console-based application developed in Java to convert between Costa Rican colón (CRC) and other currencies. Created as part of an Alura + Oracle challenge.",
      technologies: ["Java", "REST API", "JSON Parsing"],
      repositoryUrl: "https://github.com/D240021/Conversor-de-Monedas-Java",
      websiteUrl: null
    },
    {
      id: 6,
      name: "Árbol de Seda Backend",
      description: "Backend developed with Spring Boot for a virtual clinic that includes a consultation forum and virtual appointment scheduling between patients and healthcare professionals.",
      technologies: ["Java 21+", "Spring Boot", "Spring Data JPA", "Spring Security + JWT", "MySQL/PostgreSQL", "Hibernate", "Maven"],
      repositoryUrl: "https://github.com/D240021/ArbolDeSedaBackend",
      websiteUrl: null
    },
    {
      id: 7,
      name: "Foro Hub Backend",
      description: "REST API backend developed with Spring Boot as part of the Alura Next Education Backend Challenge. Implements a forum system where users can create, view, update, and delete topics with secure JWT authentication.",
      technologies: ["Java 21+", "Spring Boot", "Spring Data JPA", "JWT (JSON Web Tokens)", "Flyway", "Lombok", "MySQL", "Maven"],
      repositoryUrl: "https://github.com/D240021/ForoHubAlura",
      websiteUrl: null
    }
  ],
  es: [
    {
      id: 1,
      name: "Cryptor Alura",
      description: "Un sitio web que encripta y desencripta frases mediante un algoritmo simple. Este proyecto fue realizado para el reto #1 de Alura.",
      technologies: ["JavaScript", "HTML", "CSS"],
      repositoryUrl: "https://github.com/D240021/encriptador-allura",
      websiteUrl: "https://d240021.github.io/encriptador-allura/"
    },
    {
      id: 2,
      name: "Guitar LA",
      description: "Sitio web de una tienda de guitarras que permite interactuar con un carrito de compras.",
      technologies: ["React & TS", "TailwindCSS", "Vite"],
      repositoryUrl: "https://github.com/D240021/guitarLA-ts/tree/main",
      websiteUrl: "https://d240021.github.io/guitarLA-ts/index.html"
    },
    {
      id: 3,
      name: "Reportería ICE",
      description: "Aplicación web desarrollada para reportar averías en el Instituto Costarricense de Electricidad (ICE).",
      technologies: ["Angular 18 & TS", ".NET Entity Framework ORM & C#", "Bootstrap CSS"],
      repositoryUrl: "https://github.com/D240021/Reporteria-ICE",
      websiteUrl: "https://d240021.github.io/reporteriaICEFrontend"
    },
    {
      id: 4,
      name: "LiterAlura",
      description: "Aplicación web construida con Java y Spring Boot para la gestión de libros y autores. Desarrollada como parte de un reto de Alura + Oracle.",
      technologies: ["Java", "Spring Boot", "JPA", "H2 Database", "Maven"],
      repositoryUrl: "https://github.com/D240021/LiterAlura",
      websiteUrl: null
    },
    {
      id: 5,
      name: "Conversor de Monedas en Java",
      description: "Aplicación de consola desarrollada en Java para convertir entre colones costarricenses (CRC) y otras monedas. Creada como parte de un reto de Alura + Oracle.",
      technologies: ["Java", "REST API", "JSON Parsing"],
      repositoryUrl: "https://github.com/D240021/Conversor-de-Monedas-Java",
      websiteUrl: null
    },
    {
      id: 6,
      name: "Árbol de Seda Backend",
      description: "Backend desarrollado con Spring Boot para una clínica virtual que incluye un foro de consultas y programación de citas virtuales entre pacientes y profesionales de la salud.",
      technologies: ["Java 21+", "Spring Boot", "Spring Data JPA", "Spring Security + JWT", "MySQL/PostgreSQL", "Hibernate", "Maven"],
      repositoryUrl: "https://github.com/D240021/ArbolDeSedaBackend",
      websiteUrl: null
    },
    {
      id: 7,
      name: "Foro Hub Backend",
      description: "API REST desarrollada con Spring Boot como parte del reto Backend de Alura Next Education. Implementa un sistema de foros donde los usuarios pueden crear, ver, actualizar y eliminar temas con autenticación segura mediante JWT.",
      technologies: ["Java 21+", "Spring Boot", "Spring Data JPA", "JWT (JSON Web Tokens)", "Flyway", "Lombok", "MySQL", "Maven"],
      repositoryUrl: "https://github.com/D240021/ForoHubAlura",
      websiteUrl: null
    }
  ]
};


export const technologies = [
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "React", color: "bg-cyan-500" },
  { name: "Angular", color: "bg-gray-900" },
  { name: "Express.js", color: "bg-green-600" },
  { name: ".NET Core", color: "bg-blue-500" },
  { name: "Spring Boot", color: "bg-green-500" },
  { name: "PostgreSQL", color: "bg-blue-700" },
  { name: "Tailwind CSS", color: "bg-teal-500" },
  { name: "Git", color: "bg-orange-600" },
  { name: "SQL Server", color: "bg-blue-400" },
  { name: "MySQL", color: "bg-orange-500" },
  { name: "Figma", color: "bg-green-500" },
  { name: "Entity Framework", color: "bg-blue-400" },
  { name: "MongoDB", color: "bg-green-600" },
]

export const media = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-barrantes-developer/" },
  { name: "GitHub", url: "https://github.com/D240021" },
  { name: "Email", url: "danielbarrantesquiros@gmail.com" },
]
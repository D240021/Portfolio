const projectsList = [
    {
        name: "Cryptor Alura",
        description: "A web site that encrypts and decrypts a phrase by a simple algorithm. This project was made for challenge #1 by Alura.",
        technologies: [
            { name: "JavaScript" },
            { name: "HTML" },
            { name: "CSS" }
        ],
        image: "../assets/img/cryptorAlura.png",
        pageUrl: "https://d240021.github.io/encriptador-allura/",
        gitHubUrl: "https://github.com/D240021/encriptador-allura"
    },
    {
        name: "Guitar LA",
        description: "A simple guitar store website that allows you interact with a cart shopping.",
        technologies: [
            { name: "React & TS" },
            { name: "TailwindCSS" },
            { name: "Vite" }
        ],
        image: "../assets/img/guitarLA.png",
        pageUrl: "https://d240021.github.io/guitarLA-ts/index.html",
        gitHubUrl: "https://github.com/D240021/guitarLA-ts/tree/main"
    },
    {
        name: "Reportería ICE",
        description: "Web application developed for fault reporting for the Costa Rican Electricity Institute (ICE).",
        technologies: [
            { name: 'Angular 18 & TS' },
            { name: '.NET Entity Framework ORM & C#' },
            { name: 'Bootstrap CSS' }
        ],
        image: "../assets/img/reporteriaICE.png",
        pageURL: "https://d240021.github.io/reporteriaICEFrontend",
        gitHubUrl: "https://github.com/D240021/Reporteria-ICE"
    },
    {
        name: "LiterAlura",
        description: "Web application built with Java and Spring Boot for managing books and authors. Developed for an Alura + Oracle challenge.",
        technologies: [
            { name: "Java" },
            { name: "Spring Boot" },
            { name: "JPA" },
            { name: "H2 Database" },
            { name: "Maven" }
        ],
        image: "",
        pageUrl: "",
        gitHubUrl: "https://github.com/D240021/LiterAlura"
    },
    {
        name: "Java Currency Converter",
        description: "Console-based application developed in Java to convert between Costa Rican colón (CRC) and other currencies. Created as part of an Alura + Oracle challenge.",
        technologies: [
            { name: "Java" },
            { name: "REST API" },
            { name: "JSON Parsing" }
        ],
        image: "",
        pageUrl: "",
        gitHubUrl: "https://github.com/D240021/Conversor-de-Monedas-Java"
    },
    {
        name: "Árbol de Seda Backend",
        description: "Backend developed with Spring Boot for a virtual clinic that includes a consultation forum and virtual appointment scheduling between patients and healthcare professionals.",
        technologies: [
            { name: "Java 21+" },
            { name: "Spring Boot" },
            { name: "Spring Data JPA" },
            { name: "Spring Security + JWT" },
            { name: "MySQL/PostgreSQL" },
            { name: "Hibernate" },
            { name: "Maven" }
        ],
        image: "",
        pageUrl: "",
        gitHubUrl: "https://github.com/D240021/ArbolDeSedaBackend"
    },
    {
        name: "Foro Hub Backend",
        description: "REST API backend developed with Spring Boot as part of the Alura Next Education Backend Challenge. Implements a forum system where users can create, view, update, and delete topics with secure JWT authentication.",
        technologies: [
            { name: "Java 21+" },
            { name: "Spring Boot" },
            { name: "Spring Data JPA" },
            { name: "JWT (JSON Web Tokens)" },
            { name: "Flyway" },
            { name: "Lombok" },
            { name: "MySQL" },
            { name: "Maven" }
        ],
        image: "",
        pageUrl: "",
        gitHubUrl: "https://github.com/D240021/ForoHubAlura"
    }



];

function renderProjects(projects) {
    const section = document.getElementById("projectSection");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const goPageButton = project.pageUrl
            ? `<button class="buttonsVisit" onclick="window.open('${project.pageUrl}', '_blank')">Go page</button>`
            : "";

        const projectImage = project.image
            ? `<img src="${project.image}" alt="project image" draggable="false" loading="lazy">`
            : "";


        card.innerHTML = `
            <div class="project-header">
                <h2>${project.name}</h2>
            </div>
            <div class="project-content">
                <p>${project.description}</p>
            </div>
            <div class="project-footer">
                <div class="techDiv">
                    ${project.technologies.map(tech => `<p>${tech.name}</p>`).join("")}
                </div>
                ${projectImage}
                ${goPageButton}
                <button class="buttonsVisit" onclick="window.open('${project.gitHubUrl}', '_blank')">Go GitHub</button>
            </div>
        `;

        section.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects(projectsList);
});

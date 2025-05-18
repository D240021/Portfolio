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
            { name: "React" },
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
            { name: 'Angular 18'},
            { name: '.NET Entity Framework ORM'},
            { name: 'Bootstrap CSS'}
        ],
        image: "../assets/img/reporteriaICE.png",
        pageURL: "https://d240021.github.io/reporteriaICEFrontend",
        gitHubUrl: "https://github.com/D240021/Reporteria-ICE"
    }
];

function renderProjects(projects) {
    const section = document.getElementById("projectSection");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

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
                <img src="${project.image}" alt="project image" draggable="false" loading="lazy">
                <button class="buttonsVisit" onclick="window.open('${project.pageUrl}', '_blank')">Go page</button>
                <button class="buttonsVisit" onclick="window.open('${project.gitHubUrl}', '_blank')">Go GitHub</button>
            </div>
        `;

        section.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects(projectsList);
});

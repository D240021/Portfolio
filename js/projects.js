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

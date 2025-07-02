const projects = [
    {
        title: "E-commerce Website",
        description: "A responsive e-commerce platform where users can buy products.",
        link: "",
    },
    {
        title: "E-commerce Website",
        description: "A responsive e-commerce platform where users can buy products.",
        link: "",
    },
    {
        title: "E-commerce Website",
        description: "A responsive e-commerce platform where users can buy products.",
        link: "",
    }
];

const container = document.getElementById("project-list");

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = "project-card";
    card.innerHTML = `
        <h3> ${project.title} </h3>
        <p>${project.description} </p>
        <a href="${project.link}" target="_blank">View Project</p>
    `;
    container.appendChild(card);
})
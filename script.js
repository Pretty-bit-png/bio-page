
const projects = [
    {
        title: "Bio Page",
        description: "My first HTML and CSS page.",
        category: "HTML"
    },
    {
        title: "Responsive Nav",
        description: "A flexbox nav bar that adapts.",
        category: "CSS"
    },
    {
        title: "Grid Gallery",
        description: "Cards laid out with CSS Grid.",
        category: "CSS"
    },
    {
        title: "Contact Form",
        description: "A form with validation.",
        category: "HTML"
    },
    {
        title: "My Portfolio",
        description: "A website about me and my IT learning.",
        category: "HTML"
    }
];

const grid = document.querySelector("#projectsGrid");
const filterButtons = document.querySelectorAll("[data-filter]");

function displayProjects(category) {
    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    const filteredProjects = projects.filter(function (project) {
        return category === "All" || project.category === category;
    });

    filteredProjects.forEach(function (project) {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML =
            "<h3>" + project.title + "</h3>" +
            "<p>" + project.description + "</p>";

        grid.appendChild(card);
    });
}

if (grid) {
    displayProjects("All");
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        displayProjects(button.dataset.filter);
    });
});

const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

if (form && message) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const text = document.querySelector("#message").value.trim();

        if (name === "" || text.length < 10) {
            message.textContent = "Please enter your name and a message of at least 10 characters.";
            return;
        }

        message.textContent = "Thanks, " + name + "! Your message was received.";

        form.reset();
    });
}

const darkModeButton = document.querySelector("#darkModeButton");

if (darkModeButton) {
    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    });
}

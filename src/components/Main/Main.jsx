import React, { useMemo, useState } from "react";
import "./Main.css";
import ProjectItem from "../ProjectItem/ProjectItem";

const projects = [
  {
    name: "MileMemo",
    subtitle: "Travel & Flight Tracking",
    category: "Frontend",
    status: "Live",
    link: "https://github.com/roeibaram/MileMemo",
    live: "https://roeibaram.github.io/MileMemo/",
    description:
      "Search flights by route/date, save personal trips, and persist travel data in localStorage with a clean interactive UI.",
    stack: ["React", "JavaScript", "API Integration", "BEM CSS"],
    points: [
      "Responsive component-based frontend with real-time state updates.",
      "Structured create/edit/manage flow for saved flight entries.",
      "Modular code organization for maintainability and reuse.",
    ],
  },
  {
    name: "WTWR",
    subtitle: "Weather-Based Clothing App",
    category: "Full Stack",
    status: "Live",
    link: "https://github.com/roeibaram/se_project_react",
    live: "https://roeibaram.github.io/se_project_react/",
    description:
      "Full-stack app that recommends clothing by current weather and lets users manage clothing cards with auth-enabled interactions.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    points: [
      "Backend APIs for users/items with full CRUD operations.",
      "Authentication, likes, and dynamic data-driven card rendering.",
      "Responsive UX with modal-based interactions and smooth flow.",
    ],
  },
  {
    name: "PetMatch",
    subtitle: "Pet Adoption Search",
    category: "Frontend",
    status: "Live",
    link: "https://github.com/roeibaram/petmatch",
    live: "https://roeibaram.github.io/petmatch/",
    description:
      "Browse and filter adoptable pets through API-powered search with a lightweight, user-friendly frontend experience.",
    stack: ["React", "External API", "Filtering", "State Management"],
    points: [
      "Third-party API integration for live pet data retrieval.",
      "Client-side filters by breed/location for better discovery.",
      "Realtime UI updates based on user interaction and search changes.",
    ],
  },
  {
    name: "Spots",
    subtitle: "Photo Sharing UI",
    category: "Frontend",
    status: "Live",
    link: "https://github.com/roeibaram/se_project_spots",
    live: "https://roeibaram.github.io/se_project_spots/",
    description:
      "Responsive photo-sharing interface with profile editing, content actions, and scalable layout behavior across devices.",
    stack: ["JavaScript", "Responsive Design", "Grid Layout"],
    points: [
      "Fluid layout adaptation across desktop and mobile viewports.",
      "Clean profile/card interaction patterns with reusable styles.",
      "Simple, robust architecture focused on user clarity.",
    ],
  },
];

function Main() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="main">
      <section id="projects" className="main__section main__section--projects">
        <div className="main__section-head">
          <h2 className="main__title">Featured Projects</h2>
          <ul className="main__filters" aria-label="Project category filters">
            {filters.map((filter) => (
              <li key={filter}>
                <button
                  type="button"
                  className={
                    activeFilter === filter
                      ? "main__filter-btn main__filter-btn_active"
                      : "main__filter-btn"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="main__projects">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={project.name} project={project} index={index} />
          ))}
        </ul>
      </section>

      <section id="contact" className="main__section main__section--contact">
        <h2 className="main__title">Contact</h2>
        <ul className="main__contact-list">
          <li>
            <a href="mailto:roeibaram37@gmail.com">roeibaram37@gmail.com</a>
          </li>
          <li>
            <a href="tel:+14709072448">470-907-2448</a>
          </li>
          <li>
            <a href="https://github.com/roeibaram" target="_blank" rel="noreferrer">
              github.com/roeibaram
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;

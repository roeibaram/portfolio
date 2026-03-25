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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMode, setSortMode] = useState("manual");

  const filters = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );

  const filterCounts = useMemo(() => {
    return projects.reduce(
      (result, project) => {
        result[project.category] = (result[project.category] || 0) + 1;
        return result;
      },
      { All: projects.length }
    );
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    const result = projects.filter((project) => {
      const matchesCategory =
        activeFilter === "All" || project.category === activeFilter;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const searchValue = [
        project.name,
        project.subtitle,
        project.description,
        project.stack.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return searchValue.includes(normalizedSearch);
    });

    if (sortMode === "name") {
      return [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortMode === "stack") {
      return [...result].sort((a, b) => b.stack.length - a.stack.length);
    }

    return result;
  }, [activeFilter, searchQuery, sortMode]);

  return (
    <main className="main">
      <section id="projects" className="main__section main__section--projects">
        <div className="main__section-head">
          <h2 className="main__title">Featured Projects</h2>

          <div className="main__tools">
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
                    {filter} ({filterCounts[filter] || 0})
                  </button>
                </li>
              ))}
            </ul>

            <div className="main__search-wrap">
              <input
                type="search"
                className="main__search-input"
                placeholder="Search projects or stack"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              {searchQuery ? (
                <button
                  type="button"
                  className="main__search-clear"
                  onClick={() => setSearchQuery("")}
                >
                  Clear
                </button>
              ) : null}
            </div>

            <label className="main__sort-label">
              Sort:
              <select
                className="main__sort-select"
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value)}
              >
                <option value="manual">Default</option>
                <option value="name">Name (A-Z)</option>
                <option value="stack">Largest Stack</option>
              </select>
            </label>
          </div>
        </div>

        <p className="main__results">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {filteredProjects.length ? (
          <ul className="main__projects">
            {filteredProjects.map((project, index) => (
              <ProjectItem key={project.name} project={project} index={index} />
            ))}
          </ul>
        ) : (
          <p className="main__empty">No matching projects found. Try a different keyword.</p>
        )}
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

import allPage from "./allPage";
import todayPage from "./todayPage";
import projectsPage from "./projectsPage";
import projectController from "../projectController";
import "../../style.css";
import storage from "../../storage";
import dropIcon from "../../icons/drop_down.png";

const pageController = (() => {
	const content = document.getElementById("content");
	const all = document.getElementById("all");
	const today = document.getElementById("today");
	const projects = document.getElementById("projects");
	const dropdown = document.getElementById("projects-dropdown");
	let pageID = "a";

	const dropImage = new Image();
	dropImage.src = dropIcon;
	document.getElementById("drop-down").appendChild(dropImage);

	all.addEventListener("focus", (e) => {
		loadAllPage();
	});
	today.addEventListener("focus", (e) => {
		loadTodayPage();
	});

	const loadAllPage = () => {
		content.innerHTML = "";
		content.appendChild(allPage());
		pageID = "a";
	};

	const loadTodayPage = () => {
		content.innerHTML = "";
		content.appendChild(todayPage());
		pageID = "t";
	};

	const loadProjectPage = (project) => {
		content.innerHTML = "";
		content.appendChild(projectsPage(project));
		pageID = [project.title];
	};

	const projectDrop = () => {
		projects.addEventListener("click", (e) => {
			if (dropdown.style.display == "flex") {
				dropdown.style.display = "none";
			} else {
				dropdown.style.display = "flex";
			}
		});
	};

	const loadPage = () => {
		content.innerHTML = "";
		if (pageID == "a") {
			loadAllPage();
		} else if (pageID == "t") {
			loadTodayPage();
		} else {
			for (const p in projectController.projects) {
				if (projectController.projects[p].title == pageID) {
					loadProjectPage(projectController.projects[p]);
				}
			}
		}
	};

	const loadNav = () => {
		dropdown.innerHTML = "";

		for (const p in projectController.projects) {
			if (projectController.projects[p].title != "default") {
				const div = document.createElement("div");
				div.innerHTML = projectController.projects[p].title;
				div.setAttribute("tabindex", 0);
				div.classList.add("project-nav-tem");
				dropdown.appendChild(div);

				div.addEventListener("focus", (e) => {
					loadProjectPage(projectController.projects[p]);
				});
			}
		}
	};

	const reload = () => {
		loadPage();
		loadNav();
		storage.saveData();
	};

	return {
		loadPage,
		loadNav,
		reload,
		projectDrop,
		loadAllPage,
	};
})();

export default pageController;

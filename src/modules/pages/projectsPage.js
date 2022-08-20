import taskCard from "../taskCard";
import project from "../Project";
import { parseISO } from 'date-fns';
import '../../style.css';
import projectController from "../projectController";
import pageController from "./pageController";


const projectsPage = (project) => {

    const header = document.createElement('div');
    const div = document.createElement('div');
    div.classList.add('tasks');

    const h1 = document.createElement('h1');
    h1.innerHTML = project.title;

    const addBtn = document.createElement('button');
    addBtn.setAttribute('id', 'project-add-btn');
    addBtn.innerHTML = 'Add Task';

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'project-delete-btn');
    deleteBtn.innerHTML = 'Delete Project';

    div.appendChild(h1);
    header.appendChild(addBtn);
    header.appendChild(deleteBtn);
    header.classList.add('project-header');
    


    div.appendChild(header);
    
    const sortedDesc = project.tasks.sort(
        (a, b) => Number(parseISO(a.dueDate)) - Number(parseISO(b.dueDate)),
    );
    
    for(const t in sortedDesc){
        let title = sortedDesc[t].title
        let desc = sortedDesc[t].description;
        let date = sortedDesc[t].dueDate;
        let prio = sortedDesc[t].priority;

        const card = taskCard(title,project.title,desc,date,prio);
        div.appendChild(card);
    }


    deleteBtn.addEventListener('click', (e) => {
        if(project.tasks.length>0){
            alert('Project must by empty before deleting.');
        }else{
            projectController.deleteProject(project.title);
            pageController.loadAllPage();
            pageController.reload();
        }
    });

    return div;
}

export default projectsPage;
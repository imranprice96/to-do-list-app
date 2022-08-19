import taskCard from "../taskCard";
import project from "../Project";
import { parseISO } from 'date-fns';


const projectsPage = (project) => {

    const div = document.createElement('div');
    div.classList.add('tasks');

    const h1 = document.createElement('h1');
    h1.innerHTML = project.title;
    div.appendChild(h1);

    /*
    for(const task in project.tasks){
        let title = project.tasks[task].title;
        let desc = project.tasks[task].description;
        let date = project.tasks[task].dueDate;
        let prio = project.tasks[task].priority;
        
        const card = taskCard(title,project.title,desc,date,prio);
        div.appendChild(card);
    }*/

    const sortedDesc = project.tasks.sort(
        (a, b) => Number(parseISO(a.dueDate)) - Number(parseISO(b.dueDate)),
    );
       // console.log(sortedDesc);
    for(const t in sortedDesc){
        let title = sortedDesc[t].title
        let desc = sortedDesc[t].description;
        let date = sortedDesc[t].dueDate;
        let prio = sortedDesc[t].priority;

        const card = taskCard(title,project.title,desc,date,prio);
        div.appendChild(card);
    }

    return div;
}

export default projectsPage;
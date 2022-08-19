import projectController from "../projectController";
import taskCard from "../taskCard";
import { parseISO } from 'date-fns';

const allPage = () => {

    const div = document.createElement('div');
    div.classList.add('tasks');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'All';
    div.appendChild(h1);

    let allTasks = [];
    //Get all tasks with their project title all into one object
    for(const p in projectController.projects ){
        let tempProject = projectController.projects[p];
        let projectTitle = projectController.projects[p].title;

        for(const t in tempProject.tasks){
            let task = tempProject.tasks[t];
            let obj = {'task':task, 'project':projectTitle};
            allTasks.push(obj);
            
        }
    }

    //sort by date descending
    const sortedDesc = allTasks.sort(
        (a, b) => Number(parseISO(a.task.dueDate)) - Number(parseISO(b.task.dueDate)),
    );

    //Pass sorted tasks to be displayed
    for(const t in allTasks){
        let project = allTasks[t].project;
        let title = allTasks[t].task.title;
        let desc = allTasks[t].task.description;
        let date = allTasks[t].task.dueDate;
        let prio = allTasks[t].task.priority;

        const card = taskCard(title,project,desc,date,prio);
        div.appendChild(card);
    }


    return div;
}

export default allPage;
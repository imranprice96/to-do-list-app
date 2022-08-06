import projectController from "../projectController";
import taskCard from "../taskCard";
import { format, parseISO } from 'date-fns';

const todayPage = () => {
    const div = document.createElement('div');
    div.classList.add('tasks');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Today';
    div.appendChild(h1);

    const today = format(new Date(), 'yyyy-MM-dd');
    today

    for(const p in projectController.projects ){
        let tempProject = projectController.projects[p];
        let projectTitle = projectController.projects[p].title;
        //console.log(tempProject);
        for(const t in tempProject.tasks){
            let title = tempProject.tasks[t].title;
            let desc = tempProject.tasks[t].description;
            let date = tempProject.tasks[t].dueDate;
            let prio = tempProject.tasks[t].priority;
            
            const card = taskCard(title,projectTitle,desc,date,prio);
            div.appendChild(card);
            console.log(today==date);
            console.log(format(parseISO(date), 'd LLLL'));
            //console.log(tempTasks);
        }
    }

    return div;
}

export default todayPage;
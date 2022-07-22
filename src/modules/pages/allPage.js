import projectController from "../projectController";
import project from "../Project";

const allPage = () => {

    const div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'All';
    div.appendChild(h1);

    for(const p in projectController.projects ){
        let tempProject = projectController.projects[p];
        let projectTitle = projectController.projects[p].title;
        //console.log(tempProject);
        for(const t in tempProject.tasks){
            let title = tempProject.tasks[t].title;
            let desc = tempProject.tasks[t].description;
            let date = tempProject.tasks[t].dueDate;
            let prio = tempProject.tasks[t].priority;
            
            const card = document.createElement('p');
            card.innerHTML = `${projectTitle} ${title} ${desc} ${date} ${prio}`;
            div.appendChild(card);
            //console.log(tempTasks);
        }
    }

    return div;
}

export default allPage;
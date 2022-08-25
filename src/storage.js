import projectController from "./modules/projectController";
import project from "./modules/Project";

const storage = (() => {

    const saveData = () =>{
        localStorage.clear();
        localStorage.setItem('tasks', JSON.stringify(storeTasks()))
        localStorage.setItem('projects', JSON.stringify(storeProjects()));
    }

    const loadData = () => {
        loadProjects();
        loadTasks();
    }

    const loadProjects = () => {
        const projects = JSON.parse(localStorage.projects);
        for(const p in projects){
            projectController.addProject(project(projects[p]))
        };
    }

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.tasks);
        if(tasks.length>0){
            for(const t in tasks){
                projectController.printProjects();
                projectController.findProject(tasks[t].project).addTask(tasks[t].task);
            }
            projectController.printProjects();
        }
        
    }

    const storeTasks = () => {
        const allTasks = [];
        for(const p in projectController.projects ){
            let tempProject = projectController.projects[p];
            let projectTitle = projectController.projects[p].title;
    
            for(const t in tempProject.tasks){
                let task = tempProject.tasks[t];
                let obj = {'task':task, 'project':projectTitle};
                allTasks.push(obj);
                
            }
        };
        return allTasks;
        
    }

    const storeProjects = () => {
        const projects = [];
        for(const p in projectController.projects){
            projects.push(projectController.projects[p].title);
        }
        return projects;
    }

    return{
        saveData,
        loadData
    }
})();

export default storage;
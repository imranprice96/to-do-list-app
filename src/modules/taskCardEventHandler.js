import project from "./Project";
import projectController from "./projectController";

const taskEventHandler = ( () => {
    
    const removeTask = (projectTitle, taskTitle) =>{
        for(const task in projectController.findProject(projectTitle).tasks){
            console.log(projectController.findProject(projectTitle));
            console.log(projectController.findProject(projectTitle).tasks);
            console.log(task);
            if(projectController.findProject(projectTitle).tasks[task].title == taskTitle){
                const index = task;
                projectController.findProject(projectTitle).deleteTask(index);
            }
        }
    }
    
    return{
        removeTask
    }
})();

export default taskEventHandler;
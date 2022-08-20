import project from "./Project";
import projectController from "./projectController";
import taskEventHandler from "./taskEventHandler";

const taskEventHandler = ( () => {
    
    const removeTask = (projectTitle, taskTitle) =>{
        for(const task in projectController.findProject(projectTitle).tasks){
            if(projectController.findProject(projectTitle).tasks[task].title == taskTitle){
                const index = task;
                projectController.findProject(projectTitle).deleteTask(index);
            }
        }
    }
    
    //Edit task
    //Bring up form filled with task info

    const editTask = (projectTitle, taskTitle) => {
        for(const task in projectController.findProject(projectTitle).tasks){
            if(projectController.findProject(projectTitle).tasks[task].title == taskTitle){
                const index = task;
                const newTitle = tasks[task].title;
                const newDescription = tasks[task].description;
                const newDueDate = tasks[task].dueDate;
                const newPriority = tasks[task].priority;

                projectController.findProject(projectTitle).editTask(index,newTitle, newDescription, newDueDate, newPriority);
            }
        }
    }// on enter check project then move task if necessary


    //Details
    //Bring up div showing more details

    //Open up task form with its details
    //Any changes made a replaced* tin the old task
    //cancel button closes with no changes made

    return{
        removeTask,
        editTask
    }
})();

export default taskEventHandler;
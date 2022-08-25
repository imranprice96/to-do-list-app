import Task from './Task';
import projectController from './projectController';
import taskEventHandler from './taskEventHandler';
import taskCardEventHanlder from './taskCardEventHandler'

//Get input from form
const taskInputController = ( () => {


    const getPriority = () => {
        const low = document.getElementById('low');
        const medium = document.getElementById('medium');
        const high = document.getElementById('high');
        if(low.checked) return 'low';
        if(medium.checked) return 'medium';
        if(high.checked) return 'high';
    }

    const setPriority = (priority) => {
        if(priority == 'low'){} document.getElementById('low').checked = true;
        if(priority == 'medium') document.getElementById('medium').checked = true;
        if(priority == 'high') document.getElementById('high').checked = true;
    }

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('date').value;
    let priority = getPriority();
    let project = document.getElementById('project');

    const getInput = () =>{
        title = document.getElementById('title').value;
        description = document.getElementById('description').value;
        dueDate = document.getElementById('date').value;
        priority = getPriority();
        project = document.getElementById('project');
    }

    const addTask = () => {
        if (document.getElementById('task-form').reportValidity()){
            let newTask = Task(title, description, dueDate, priority);
            projectController.findProject(project.value).addTask(newTask);    
        }
    }

    const populateEditForm = (title, project, date, description, priority) => {
        document.getElementById('title').value = title;
        document.getElementById('description').value = description;
        document.getElementById('date').value = date;
        setPriority(priority);
        document.getElementById('project').value = project;
        
        taskCardEventHanlder.removeTask(project,title);
    }
    
    return {
        addTask,
        getInput,
        populateEditForm
    }
})();



export default taskInputController;
import Task from './Task';
import projectController from './projectController';

//Get input from form
const taskInputController = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('date').value;
    const priority = getPriority();
    const project = document.getElementById('project');

    //projectController();
    //console.log(project.value);

    if (validateInput(title,description,date)){
        let newTask = Task(title, description, dueDate, priority);
        projectController.findProject(project.value).addTask(newTask);
        //projectController.findProject(project.value).printProject();

    }     
}





const validateInput = (title, description, date) => {
    // add date validation for min date
    return title != '';
};

const getPriority = () => {
    const low = document.getElementById('low');
    const medium = document.getElementById('medium');
    const high = document.getElementById('high');
    if(low.checked) return 'low';
    if(medium.checked) return 'medium';
    if(high.checked) return 'high';
};


export default taskInputController;
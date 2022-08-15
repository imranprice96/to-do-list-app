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
    const t = document.getElementById('title').value;
    const tError = document.getElementById('title-error');
    const d = document.getElementById('description').value;
    const due = document.getElementById('due-date').value;
    // add date validation for min date

    if(t.length < 2){
        //tError.textContent = 'Title must be two or more characters'
       // console.log(tError)
        //return false;
    }
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
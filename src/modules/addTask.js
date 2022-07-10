import { hi } from 'date-fns/locale';
import Task from './Task';

const addTask = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('date').value;
    const priority = getPriority();

    if (validateInput(title,description,date)){
        let newTask = Task(title, description, dueDate, priority);
        return newTask;
    }
        
}



//TO DO
/*Tomorrow:
 * add behaviour for getting form
 * store data received into new task
 * 
 * 
 */

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


export default addTask;
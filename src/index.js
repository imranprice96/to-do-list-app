import taskEventHandler from './modules/taskEventHandler';
import addTaskForm from './modules/addTaskForm'

/*
let t1 = Task(
    'Tame goat',
    'go and find a goat and tame it',
    new Date(2022,0,1),
    'high'
);

t1.printTask();
*/

document.getElementById('add').appendChild(addTaskForm());

taskEventHandler();
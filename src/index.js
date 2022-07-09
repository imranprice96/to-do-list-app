import Task from './modules/Task';
import taskController from './modules/taskController';
import { format } from 'date-fns';

let t1 = Task(
    'Tame goat',
    'go and find a goat and tame it',
    format(new Date(2022,0,1), 'dd/MM/yyyy'),
    'high'
);

console.log(t1.title);    
console.log(t1.description);
console.log(t1.dueDate);
console.log(t1.priority);

taskController();
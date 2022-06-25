import Task from './modules/Task';
import { format } from 'date-fns'

let t1 = Task(
    'Tame goat',
    'go and find a goat and tame it',
    format(new Date(2022,0,1), 'dd/MM/yyyy'),
    'high'
);

console.log(t1.getTitle());    
console.log(t1.getDescription());
console.log(t1.getDueDate());
console.log(t1.getPriority());
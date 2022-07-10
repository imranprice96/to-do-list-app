/*
const taskController = (() => {
    //add eventlisteners for adding and editing.
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (e) =>{
        console.log(button);
    });

})();
*/


import Task from './Task';
import addTask from './addTask';


const taskController = () => {
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', (e) =>{
        /*
        ADD OPEN OF FORM
        let newTask = Task('Dishes','Clean up your mess',new Date(), 'Low');
        newTask.printTask();
        
        */console.log('234');
    });
    const enterBtn = document.getElementById('add-sumbit');
    enterBtn.addEventListener('click', (e) =>{
        const newTask = addTask();
        newTask.printTask();
    });
};
export default taskController;
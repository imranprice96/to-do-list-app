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


const taskController = () => {
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (e) =>{
        let newTask = Task('Dishes','Clean up your mess',new Date(), 'Low');
        console.table(newTask);
    });
};
export default taskController;
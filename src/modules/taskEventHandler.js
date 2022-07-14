import taskInputController from './taskInputController';


const taskEventHandler = () => {
    const formDiv = document.getElementById('add');
    const addBtn = document.getElementById('add-btn');
    const cancelBtn = document.getElementById('add-close');
    const enterBtn = document.getElementById('add-submit');

    addBtn.addEventListener('click', (e) =>{
        formDiv.style.display = 'block';
    });
    
    enterBtn.addEventListener('click', (e) =>{
        const newTask = taskInputController();
        formDiv.style.display = 'none';
        newTask.printTask();
    });
   
    cancelBtn.addEventListener('click', (e) =>{
        formDiv.style.display = 'none';
    });
};
export default taskEventHandler;

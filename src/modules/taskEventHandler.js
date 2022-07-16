import projectController from './projectController';
import taskInputController from './taskInputController';


const taskEventHandler = () => {
    const formDiv = document.getElementById('add');
    const addBtn = document.getElementById('add-btn');
    const cancelBtn = document.getElementById('add-close');
    const enterBtn = document.getElementById('add-submit');

    addBtn.addEventListener('click', (e) =>{
        formDiv.style.display = 'block';
    });
    
    enterBtn.addEventListener('click', (e) =>{;
        taskInputController();
        formDiv.style.display = 'none';
    });
   
    cancelBtn.addEventListener('click', (e) =>{
        formDiv.style.display = 'none';
    });
};
export default taskEventHandler;

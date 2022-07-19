import projectController from './projectController';
import taskInputController from './taskInputController';
import '../style.css';


const taskEventHandler = () => {
    const formDiv = document.getElementById('add');
    const addBtn = document.getElementById('add-btn');
    const cancelBtn = document.getElementById('add-close');
    const enterBtn = document.getElementById('add-submit');
    formDiv.classList.add('close-popup');

    const openForm = () => {
        if(formDiv.classList.contains('close-popup')){
            formDiv.classList.remove('close-popup');
        };
        formDiv.classList.add('open-popup');
    }

    const closeForm = () =>{
        if(formDiv.classList.contains('open-popup')){
            formDiv.classList.remove('open-popup');
        };
        formDiv.classList.add('close-popup');
    }

    addBtn.addEventListener('click', (e) =>{
        openForm();
    });
    
    enterBtn.addEventListener('click', (e) =>{;
        taskInputController();
        //formDiv.style.display = 'none';
        closeForm();
    });
   
    cancelBtn.addEventListener('click', (e) =>{
        //formDiv.style.display = 'none';
        closeForm();
    });

};
export default taskEventHandler;

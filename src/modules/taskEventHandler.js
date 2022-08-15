import projectController from './projectController';
import taskInputController from './taskInputController';
import '../style.css';
import pageController from './pages/pageController';


const taskEventHandler = () => {
    const formDiv = document.getElementById('form-overlay');
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

    const resetForm = () => {
        document.getElementById('task-form').reset();
    }

    const getProjects = () => {
        let projectSelect = document.getElementById('project');
        projectSelect.innerHTML = '';
        for(const p in projectController.projects){
            let option = document.createElement('option');
            option.setAttribute('value', projectController.projects[p].title);
            option.innerHTML  = projectController.projects[p].title;
            projectSelect.appendChild(option);
        }
    }

    addBtn.addEventListener('click', (e) =>{
        openForm();
        getProjects();
        document.getElementById('title').focus();
    });
    
    //fix this and task input controller to module
    enterBtn.addEventListener('click', (e) =>{
        taskInputController();
        closeForm();
        resetForm();
        pageController.reload();
    });
   
    cancelBtn.addEventListener('click', (e) =>{
        closeForm();
        resetForm();
        pageController.reload();
    });

};
export default taskEventHandler;

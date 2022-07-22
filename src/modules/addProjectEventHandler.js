 import addProject from "./addProject";
 import '../style.css';
 import projectController from "./projectController";
 import Project from './Project';

 const addProjectEventHandler = () => {
    document.getElementById('body').appendChild(addProject());
    const addBtn = document.getElementById('add-project');
    const formDiv = document.getElementById('project-overlay');
    const cancelBtn = document.getElementById('add-project-close');
    const enterBtn = document.getElementById('add-project-submit');
    const form = document.getElementById('add-project-form');

    formDiv.classList.add('popup-background');
    formDiv.classList.add('close-popup');

    const innerDiv = document.getElementById('add-project-div');
    innerDiv.classList.add('popup-box-closed');
    form.classList.add('popup-stlying');


    //add form resets
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
        form.reset();
    }


    addBtn.addEventListener('click' , (e) => {
        openForm();
    });
    
    enterBtn.addEventListener('click', (e) =>{;
        // TODO: project input controller
        const title = document.getElementById('project-title').value;
        if(validateInput(title)){
            const newProject = Project(title);
            projectController.addProject(newProject);
            projectController.printProjects();
        }
        closeForm();
        resetForm();
    });
   
    cancelBtn.addEventListener('click', (e) =>{
        closeForm();
        resetForm();
    });
    
    const validateInput = (newTitle) => {
        return newTitle.value != '' ? true : false;
    }
    //add way to close the other form and reset if it is already open
 }

 export default addProjectEventHandler;
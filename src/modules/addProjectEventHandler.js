 import addProject from "./addProject";
 import '../style.css';
 import projectController from "./projectController";
 import Project from './Project';

 const addProjectEventHandler = () => {
    document.getElementById('content').appendChild(addProject());
    const addBtn = document.getElementById('add-project');
    const formDiv = document.getElementById('add-project-div');
    const cancelBtn = document.getElementById('add-project-close');
    const enterBtn = document.getElementById('add-project-submit');
    const form = document.getElementById('add-project-form');

    formDiv.classList.add('close-popup');
    formDiv.classList.add('popup-box-closed');
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

    addBtn.addEventListener('click' , (e) => {
        openForm();
        getProjects();
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
    });
   
    cancelBtn.addEventListener('click', (e) =>{
        closeForm();
    });
    
    const validateInput = (newTitle) => {
        return newTitle.value != '' ? true : false;
    }
    //add way to close the other form and reset if it is already open
 }

 export default addProjectEventHandler;
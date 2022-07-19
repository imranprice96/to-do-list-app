 import addProject from "./addProject";
 import '../style.css';

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

    addBtn.addEventListener('click' , (e) => {
        openForm();
    });
    
    enterBtn.addEventListener('click', (e) =>{;
        // TODO: project input controller
        closeForm();
    });
   
    cancelBtn.addEventListener('click', (e) =>{
        closeForm();
    });
    
    //add way to close the other form and reset if it is already open
 }

 export default addProjectEventHandler;
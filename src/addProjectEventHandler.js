 import addProject from "./addProject";

 const addProjectEventHandler = () => {
    const addBtn = document.getElementById('add-project');
    addBtn.addEventListener('click' , (e) => {
        document.getElementById('content').appendChild(addProject());
        // Add css module that adds the same styles as the add button
    });
 }

 export default addProjectEventHandler;
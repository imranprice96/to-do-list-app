const addProject = () =>{
    const div = document.createElement('div');
    div.setAttribute('id','add-project-div');
    const form = document.createElement('form');
    form.setAttribute('id','add-project-form');
    form.setAttribute('action', '');
    form.setAttribute('method', 'get');
    div.appendChild(form);

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'project-title');
    title.setAttribute('id', 'project-title');
    title.required = true;
    title.minLength = 2;


    const tLabel = document.createElement('label');
    tLabel.setAttribute('for', 'project-title');
    tLabel.innerHTML = 'Title:'

    form.appendChild(tLabel);
    form.appendChild(title);

    const enterBtn = document.createElement('button');
    enterBtn.setAttribute('type','button');
    enterBtn.setAttribute('id','add-project-submit');
    enterBtn.innerHTML = 'Enter';


    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type','button');
    cancelBtn.setAttribute('id','add-project-close');
    cancelBtn.innerHTML = 'Cancel';

    const buttonDiv = document.createElement('div');
    buttonDiv.appendChild(enterBtn);
    buttonDiv.appendChild(cancelBtn);

    form.appendChild(buttonDiv);

    const outerDiv = document.createElement('div');
    outerDiv.setAttribute('id', 'project-overlay');
    outerDiv.appendChild(div);
    return outerDiv;
}

export default addProject;

//Get input from form
const addTaskForm = () => {
    const form = document.createElement('form');
    form.setAttribute('method', 'post');

    //title
    
    const titleDiv = document.createElement('div');
    const titleInput = document.createElement('input');
    const titleLabel = document.createElement('label');

    titleLabel.setAttribute('for', 'title');
    titleLabel.innerHTML = 'Title:';

    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');
    
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);
    form.appendChild(titleDiv);

    //description
    const descriptionDiv = document.createElement('div');
    const descriptionInput = document.createElement('input');
    const descriptionLabel = document.createElement('label');

    descriptionLabel.innerHTML = 'Description:';
    descriptionLabel.setAttribute('for','description');

    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('id', 'description');

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);
    form.appendChild(descriptionDiv);

    //due date
    const dateDiv = document.createElement('div');
    const dateInput =  document.createElement('input');
    const dateLabel = document.createElement('label');

    dateLabel.innerHTML = 'Due Date:';
    dateLabel.setAttribute('for','date');

    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'due-date');
    dateInput.setAttribute('id', 'date');

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);
    form.appendChild(dateDiv);

    // -------------------------------------------------
    //priority
    const fSet = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Priority';
    const priorityDiv = document.createElement('div');


    //low
    const lowLabel = document.createElement('label');
    lowLabel.setAttribute("for", 'low');
    lowLabel.innerHTML = 'Low';

    const low = document.createElement('input');
    low.setAttribute('type', 'radio');
    low.setAttribute('id', 'low');
    low.setAttribute('name', 'priority');
    low.setAttribute('value', 'low');
    low.checked = true;

    //medium
    const mediumLabel = document.createElement('label');
    mediumLabel.setAttribute('for', 'medium');
    mediumLabel.innerHTML = 'Medium';

    const medium = document.createElement('input');
    medium.setAttribute('type', 'radio');
    medium.setAttribute('id', 'medium');
    medium.setAttribute('name', 'priority');
    medium.setAttribute('value', 'medium');

    //high
    const highLabel = document.createElement('label');
    highLabel.setAttribute('for', 'high');
    highLabel.innerHTML = 'High';

    const high = document.createElement('input');
    high.setAttribute('type', 'radio');
    high.setAttribute('id', 'high');
    high.setAttribute('name', 'priority');
    high.setAttribute('value', 'high');

    priorityDiv.appendChild(low);
    priorityDiv.appendChild(lowLabel);
    priorityDiv.appendChild(medium);
    priorityDiv.appendChild(mediumLabel);
    priorityDiv.appendChild(high);
    priorityDiv.appendChild(highLabel);

    fSet.appendChild(legend);
    fSet.appendChild(priorityDiv);
    form.appendChild(fSet);

    // -------------------------------------------------

    //buttons
    const btnDiv = document.createElement('div');


    const enter = document.createElement('button');
    enter.setAttribute('type','button');
    enter.setAttribute('id','add-submit');
    enter.innerHTML = 'Enter';


    const cancel = document.createElement('button');
    cancel.setAttribute('type','button');
    cancel.setAttribute('id','add-close');
    cancel.innerHTML = 'Close';

    btnDiv.appendChild(enter);
    btnDiv.appendChild(cancel);
    form.appendChild(btnDiv);

    const div = document.createElement('div');
    div.setAttribute('id','add');
    div.appendChild(form);

    div.style.display = 'none';

    return div;
}




export default addTaskForm;

/*
<form action="" method="get">
                <div>
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title">
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input type="text" name="description" id="description">
                </div>
                <div>
                    <label for="date">Due Date:</label>
                    <input type="date" id="date" name="due-date">
                </div>
                <fieldset>
                    <legend>Priority:</legend>
                    <div>
                        <input type="radio" id="low" name="priority" value="low" checked>
                        <label for="low">Low</label>

                        <input type="radio" id="medium" name="priority" value="medium" >
                        <label for="medium">Medium</label>

                        <input type="radio" id="high" name="priority" value="high" >
                        <label for="high">High</label>
                    </div>
                         
                </fieldset>
                <div>
                    <button type="button" id="add-sumbit">Enter</button>
                    <button type="button" id="add-close">Cancel</button>
                </div> 
</form>
*/
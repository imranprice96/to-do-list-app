
//Get input from form
const addTaskForm = (projectTitle) => {
    const form = document.createElement('form');
    form.setAttribute('method', 'post');

    //title
    const titleDiv = document.createElement('div');
    const titleInput = document.createElement('input');
    titleDiv.appendChild(titleInput);
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');

    //description
    const descriptionDiv = document.createElement('div');
    const descriptionInput = document.createElement('input');
    descriptionDiv.appendChild(descriptionInput);
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('id', 'description');

    //due date
    const dateDiv = document.createElement('div');
    const dateInput =  document.createElement('input');
    dateDiv.appendChild(dateInput);
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'due-date');
    dateInput.setAttribute('id', 'date');

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

    // -------------------------------------------------

    //buttons

    return fSet;
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
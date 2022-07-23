import './style.css';
import editIcon from '../icons/edit.png';
import deleteIcon from '../icons/delete.png';

const taskCard = (title,project,description,duedate,priority) => {
    const card = document.createElement('div');
    card.classList.add('task-card');

    //Priority
    switch(priority){
        case 'low':
            card.classList.add('low');
            break;
        case 'medium':
            card.classList.add('medium');
            break;
        case 'high':
            card.classList.add('high');
            break;

    };

    //add isCompleted variable to task object or remove the feature and just use delete
    const doneBox = document.createElement('div');

    //Heading
    const heading = document.createElement('div');
    heading.classList.add('task-card-title');

    const cardTitle = document.createElement('div');
    cardTitle.innerHTML = 'title';

    const cardProject = document.createElement('div');
    cardProject.innerHTML = project;

    heading.appendChild(cardTitle);
    heading.appendChild(cardProject);

    //Details
    //Add class to button
    //Open to show details card
    const details =  document.createElement('div');
    details.innerHTML = 'Details';

    //Due Date
    const due =  document.createElement('div');
    due.innerHTML = duedate;

    //Edit
    const edit = document.createElement('div');
    const editImg = new Image();
    editImg.src = editIcon;
    edit.appendChild(editImg);

    //Delete
    const deleteDiv = document.createElement('div');
    const deleteImg = new Image();
    deleteImg.src = deleteIcon;
    deleteDiv.appendChild(deleteImg);

    //Append to card
    card.appendChild(doneBox);
    card.appendChild(heading);
    card.appendChild(details);
    card.appendChild(due);
    card.appendChild(edit);
    card.appendChild(deleteDiv);

    return card;
}

export default taskCard;
/*

<div class="task-card">
    <div>✓</div>
    <div class="task-card-title">
        <div>TITLE</div>
        <div>project</div>
    </div>
    <div>Details</div>
    <div>dd-MM</div>
    <div>edit</div>
    <div>delete</div>
</div>




*/
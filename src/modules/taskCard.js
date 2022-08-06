import '../style.css'
import editIcon from '../icons/edit.png';
import deleteIcon from '../icons/delete.png';
import taskEventHandler from './taskEventHandler';
import pageController from './pages/pageController';
import taskCardEventHandler from './taskCardEventHandler';
import { format, parseISO } from 'date-fns';
import detailPage from '../detailPage';

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
    cardTitle.innerHTML = title;
    cardTitle.classList.add('card-title');

    const cardProject = document.createElement('div');
    if(project != 'default'){
         cardProject.innerHTML = project;
         cardProject.classList.add('card-project');
    }

    heading.appendChild(cardTitle);
    heading.appendChild(cardProject);

    //Details
    //Add class to button
    //Open to show details card
    const details =  document.createElement('div');
    details.innerHTML = 'Details';

    details.classList.add('detail-btn');
    details.addEventListener('click', (e) => {
        document.getElementById('body').appendChild(detailPage(title,project,description,duedate,priority));
    });

    //Due Date
    const due =  document.createElement('div');
    let dateFormatted = '';
    if(duedate != ''){
        dateFormatted = format(parseISO(duedate), 'd LLLL');
    }
    due.innerHTML = dateFormatted;

    //Edit
    const edit = document.createElement('div');
    const editImg = new Image();
    editImg.src = editIcon;
    edit.appendChild(editImg);
    editImg.classList.add('card-icon');

    //Delete
    const deleteDiv = document.createElement('div');
    const deleteImg = new Image();
    deleteImg.src = deleteIcon;
    deleteDiv.appendChild(deleteImg);
    deleteImg.classList.add('card-icon');

    deleteImg.addEventListener('click', (e) => {
        taskCardEventHandler.removeTask(project,title);
        pageController.reload();
    });

    //Append to card
    card.appendChild(doneBox);
    card.appendChild(heading);
    card.appendChild(due);
    card.appendChild(details);
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
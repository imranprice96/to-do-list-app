import { format, parseISO } from 'date-fns';
import './style.css';

const detailPage = (title,project,description,duedate,priority) =>{

    const div = document.createElement('div');
    div.setAttribute('id','details-overlay');
    const card = document.createElement('div');

    const header = document.createElement('div');


    const nTitle = document.createElement('h2');
    nTitle.innerHTML = `Title: ${title}`;

    const nProject = document.createElement('h3');
    nProject.innerHTML = `Project: ${project}`;

    const nDueDate = document.createElement('p');
    const d = format(parseISO(duedate), 'd LLLL yyyy')
    nDueDate.innerHTML = `Due Date: ${d}`;

    const nPriority = document.createElement('p');
    nPriority.innerHTML = `Priority: ${priority}`;

    const nDescription = document.createElement('p');
    nDescription.innerHTML = `Description: ${description}`;


    const button = document.createElement('button');
    button.innerHTML = 'Close';

    card.appendChild(nTitle);
    card.appendChild(nProject);
    card.appendChild(nDueDate);
    card.appendChild(nPriority);
    card.appendChild(nDescription);
    card.appendChild(button);

    div.appendChild(card);

    div.classList.add();

    //Add open and close functionality
    //Fix date input and validation
    div.classList.add('popup-background');
    div.classList.add('open-popup');

    card.classList.add('popup-box-closed');
    //card.classList.add('popup-stlying');

    const closeCard = () => {
        if(div.classList.contains('open-popup')){
            div.classList.remove('open-popup');
        };
        div.classList.add('close-popup');
    }

    button.addEventListener('click' , (e) => {
        closeCard();
    });

    return div;
}

export default detailPage;
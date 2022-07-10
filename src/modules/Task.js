import { format } from 'date-fns';

const Task = (title, description, dueDate, priority) =>{

    /*
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    */

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDueDate) => dueDate = newDueDate;
    const setPriority = (newPriority) => priority = newPriority;

    const printTask = () => {
        console.log(title, description, dueDate, priority);
    };

    return{
        title,
        description,
        dueDate,
        priority,
        /*
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        */
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        printTask
    }
};

//TODO
// - add validation?
// - or just do it css side?
// return date formatted?


export default Task;


const Task = (title, description, dueDate, priority) =>{


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

        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        printTask
    }
};



export default Task;

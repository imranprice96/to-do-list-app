const project = (title) => {

    const tasks = [];
    const setTitle = (newTitle) => title = newTitle; 
    const addTask = (task) => {
        tasks.push(task);
    };
    const deleteTask = (index) => {
       if(index > -1){
            tasks.splice(index,1);
       }
    };
    const printProject = () =>{
        console.log(tasks);
    };
    const editTask = (index, newTitle, newDescription, newDueDate, newPriority) => {
        if(index > -1){
            tasks[index].title =  newTitle;
            tasks[index].description =  newDescription;
            tasks[index].dueDate =  newDueDate;
            tasks[index].priority =  newPriority;
       }
    }
    return {
        title, 
        tasks,
        setTitle,
        addTask,
        deleteTask,
        editTask,
        printProject,
    };
};

export default project;
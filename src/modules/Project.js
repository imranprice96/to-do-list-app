const project = (title) => {

    const tasks = [];
    const setTitle = (newTitle) => title = newTitle; 
    const addTask = (task) => {
        tasks.push(task);
    };
    const deleteTask = (task) => {
        // fitler / map
    }
    const printProject = () =>{
        console.log(tasks);
    }
    return {
        title, 
        tasks,
        setTitle,
        addTask,
        deleteTask,
        printProject,
    };
};

export default project;
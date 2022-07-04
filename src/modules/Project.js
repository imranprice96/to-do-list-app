const project = (title, tasks) => {

    const setTitle = (newTitle) => title = newTitle; 
    const addTask = (task) => {
        tasks.push(task);
    };
    const deleteTask = (task) => {
        // fitler / map
    }
    return {
        title, 
        tasks,
        setTitle,
        addTask,
        deleteTask
    };
};

export default project;
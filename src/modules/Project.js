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
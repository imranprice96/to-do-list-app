import Project from './Project';

/*
const projectController = () => {
    const projects = [];
    const defaultProject = Project('default');
    projects.push(defaultProject);

}
*/

const projectController = ( () => {
    const projects = [];
    const defaultProject = Project('default');
    projects.push(defaultProject);
    const chores = Project('chores');
    projects.push(chores);

    const findProject = (title) => {
        for(const p in projects){
            if(projects[p].title == title){
                return projects[p];
            }
        }
    };

    const addProject = (project) => {
        if(titleIsUnique(project.title)){
            projects.push(project);
        }
    };

    const titleIsUnique = (title) => {
        let isUnique = true;
        for(const p in projects){
            if(projects[p].title == title) isUnique = false;
        };
        return isUnique;
    };

    const printProjects = () => {
        console.log(projects);
    };

    const deleteProject = (title) => {
        for(const p in projects){
            if(projects[p].title == title){
                projects.splice(p, 1);
            }
        }  
    };

    

    return {
        projects,
        addProject,
        findProject,
        printProjects,
        deleteProject
    };
})();

export default projectController;
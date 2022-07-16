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

    const findProject = (title) => {
        for(const p in projects){
            //console.log(projects[p].title);
            if(projects[p].title == title){
                //console.log(projects[p]);
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
    }

    return {
        projects,
        addProject,
        findProject,
        printProjects,
    };
})();

export default projectController;
import projectController from "./modules/projectController";
import Project from "./modules/Project";
import Task from "./modules/Task";


const testData = () => {

    //default
    projectController.projects[0].addTask(Task('Car service','Book car service for sometime next month.','2022-08-05','low'));
    projectController.projects[0].addTask(Task('Lawns','Mow the lawns.','2022-06-10','medium'));
    projectController.projects[0].addTask(Task('Gift','Buy birthday gift.','2022-07-19','high'));
    projectController.projects[0].addTask(Task('Test app','Fill app with test data.','2022-09-21','medium'));

    //Chores
    const Chores = Project('Chores');
    projectController.projects.push(Chores);
    Chores.addTask(Task('Vacuum', 'Vacuum the entire house this weekend.', '2022-10-10', 'low'));
    Chores.addTask(Task('Bathroom','Clean the bathroom.','2022-10-11','high'));
    Chores.addTask(Task('Gardening','','2022-09-10','low'));
    Chores.addTask(Task('Windows','','2022-08-08','low'));
    Chores.addTask(Task('Kitchen','Tidy the kitchen','2022-10-27','medium'));

    //Groceries
    const Groceries = Project('Groceries');
    projectController.projects.push(Groceries);
    Groceries.addTask(Task('Milk','','2022-11-02','low'));
    Groceries.addTask(Task('Eggs','','2022-12-09','medium'));
    Groceries.addTask(Task('Bread','','2022-08-17','low'));
    Groceries.addTask(Task('Carrots','','2022-09-20','low'));





}

export default testData;
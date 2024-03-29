import taskEventHandler from './modules/taskEventHandler';
import pageController from './modules/pages/pageController';
import addProjectEventHandler from './modules/addProjectEventHandler';
import testData from './testData';
import storage from './storage';

//Use to populate with test data
//testData();

storage.loadData();
pageController.reload();
pageController.projectDrop();
addProjectEventHandler();


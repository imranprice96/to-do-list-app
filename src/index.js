import taskEventHandler from './modules/taskEventHandler';
import pageController from './modules/pages/pageController';
import addProjectEventHandler from './modules/addProjectEventHandler';
import testData from './testData';

testData();
pageController.reload();
pageController.projectDrop();
//taskEventHandler();
addProjectEventHandler();


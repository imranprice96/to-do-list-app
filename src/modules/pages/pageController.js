import allPage from './allPage';
import todayPage from './todayPage';
import projectsPage from './projectsPage';

const pageController = (() => {
    const content = document.getElementById('content');
    const all = document.getElementById('all');
    const today = document.getElementById('today');
    const projects = document.getElementById('projects');
    let pageID = 'a';
    
    all.addEventListener('focus', (e) => {
        loadAllPage();
    });
    today.addEventListener('focus', (e) => {
        loadTodayPage();
    });
    /*Replace with array of projects
    ------------------------------------
    projects.addEventListener('focus', (e) => {
        content.innerHTML = '';
        content.appendChild(projectsPage());
    });
    */
   const loadAllPage = () =>{
        content.innerHTML = '';
        content.appendChild(allPage());
        pageID = 'a';
   };

   const loadTodayPage = () =>{
    content.innerHTML = '';
    content.appendChild(todayPage());
    pageID = 't';
   };

   const loadProjectPage = (project) => {

   };

    const loadPage = () => {
        content.innerHTML = '';
        if(pageID == 'a'){
            loadAllPage();
        }else if(pageID == 't'){
            loadTodayPage();
        }else{
            loadProjectPage(pageID);
        };
    };

    //add and remove css background based on click
    return {
        loadPage
    };
})();

export default pageController;
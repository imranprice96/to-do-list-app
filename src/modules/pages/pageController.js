import allPage from './allPage';
import todayPage from './todayPage';
import projectsPage from './projectsPage';
import projectController from '../projectController';
import dropIcon from '../../icons/drop_down.png'

const pageController = (() => {
    const content = document.getElementById('content');
    const all = document.getElementById('all');
    const today = document.getElementById('today');
    const projects = document.getElementById('projects');
    const dropdown = document.getElementById('projects-dropdown');
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

   const projectDrop = () => {
     projects.addEventListener('click', (e) => {
        if(dropdown.style.display == 'flex'){
            dropdown.style.display = 'none';
        } else{
            dropdown.style.display = 'flex';
        }
     });
   }

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

    const loadNav = () => {
        dropdown.innerHTML = '';
        for(const p in projectController.projects){
            if(projectController.projects[p].title != 'default'){
                const div = document.createElement('div');
                div.innerHTML = projectController.projects[p].title;
                //add event listener to this div to run loadProjectPage()
                dropdown.appendChild(div);
            }
        }
        projectDrop();
        //const dropDown = new Image();
        //dropDown.src(dropIcon);
    };

    const reload = () =>{
        loadNav();
        loadPage();
    }

    //add loadpage to add buttons to refresh on submit
    // add validation to input
    return {
        loadPage,
        loadNav,
        reload
    };
})();

export default pageController;
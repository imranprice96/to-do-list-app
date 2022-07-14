import allPage from './allPage';
import todayPage from './todayPage';
import projectsPage from './projectsPage';

const pageController = () => {
    const content = document.getElementById('content');
    const all = document.getElementById('all');
    const today = document.getElementById('today');
    const projects = document.getElementById('projects');

    all.addEventListener('focus', (e) => {
        content.innerHTML = '';
        all.focus();
        content.appendChild(allPage());
    });
    today.addEventListener('focus', (e) => {
        content.innerHTML = '';
        content.appendChild(todayPage());
    });
    projects.addEventListener('focus', (e) => {
        content.innerHTML = '';
        content.appendChild(projectsPage());
    });
}

export default pageController;
import Html from '../Skills/Html';
import CSS from '../Skills/CSS';
import JavaScript from '../Skills/JavaScript';

export default {
    name: 'Laboratorio 5',
    description: 'HTML, CSS, JavaScript',
    icon: 'folder.png',
    view: {
        component: 'Project',
        title: 'Laboratorio 5',
        description: 'Web chat that connects to the main class server',
        image: 'lab5.png',
        sections: [
            Html,
            CSS,
            JavaScript
        ],
        github: 'https://github.com/DerNait/lab5-web',
        link: 'https://23584.dernait.my/lab5/'
    }
}
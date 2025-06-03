import Html from '../Skills/Html';
import CSS from '../Skills/CSS';

export default {
    name: 'Laboratorio 4',
    description: 'HTML, CSS',
    icon: 'folder.png',
    view: {
        component: 'Project',
        title: 'Laboratorio 4',
        description: 'Complex character drawing done only with CSS',
        image: 'lab4.png',
        sections: [
            Html,
            CSS
        ],
        github: 'https://github.com/DerNait/lab4-web',
        link: 'https://23584.dernait.my/lab4-web/'
    }
}
import Html from '../Skills/Html';
import CSS from '../Skills/CSS';

export default {
    name: 'Laboratorio 1',
    description: 'HTML, CSS',
    icon: 'folder.png',
    view: {
        component: 'Project',
        title: 'Laboratorio 1',
        description: 'In this lab we answered different questions by navigating to telehack.com',
        image: 'lab1.png',
        sections: [
            Html,
            CSS
        ],
        github: '',
        link: 'https://23584.dernait.my/lab1/'
    }
}
import Html from '../Skills/Html';
import CSS from '../Skills/CSS';
import JavaScript from '../Skills/JavaScript';
import React from '../Skills/React';

export default {
    name: 'Laboratorio 6',
    description: 'HTML, CSS, JavaScript, React',
    icon: 'folder.png',
    view: {
        component: 'Project',
        title: 'Laboratorio 6',
        description: 'Simple memory card game based on the popular videogame franchise: Halo',
        image: 'lab6.png',
        sections: [
            Html,
            CSS,
            JavaScript,
            React
        ],
        github: 'https://github.com/DerNait/web-lab6',
        link: 'https://23584.dernait.my/lab6/'
    }
}
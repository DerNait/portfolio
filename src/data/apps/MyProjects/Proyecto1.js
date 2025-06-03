import Html from '../Skills/Html';
import CSS from '../Skills/CSS';
import JavaScript from '../Skills/JavaScript';
import React from '../Skills/React';

export default {
    name: 'Proyecto 1',
    description: 'HTML, CSS, JavaScript, React',
    icon: 'folder.png',
    view: {
        component: 'Project',
        title: 'Proyecto 1',
        description: 'Simple basic web calculator',
        image: 'proyecto1.png',
        sections: [
            Html,
            CSS,
            JavaScript,
            React
        ],
        github: 'https://github.com/DerNait/proyecto1-web',
        link: 'https://23584.dernait.my/proyecto1/'
    }
}
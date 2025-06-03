import Html from '../Skills/Html';
import CSS from '../Skills/CSS';
import JavaScript from '../Skills/JavaScript';
import Vue from '../Skills/Vue';

export default {
    name: 'Credits',
    icon: 'credit.png',
    description: 'All the credits and technologies used behind this portfolio',
    view: {
        component: 'Credits',
        title: 'Credits',
        description: 'This portfolio was done by Kevin Villagrán.',
        credits: [
            'Thanks to March Mountain Productions for the Windows XP High Resolution Icon Pack: https://guiarchive.blogspot.com/.', 
            'Php icons created by Freepik - Flaticon'
        ],
        sections: [
            Html,
            CSS,
            JavaScript,
            Vue
        ],
        github: 'https://github.com/DerNait/portfolio',
    }
}
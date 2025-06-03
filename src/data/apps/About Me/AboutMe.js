import Discord from "./Discord";
import Instagram from "./Instagram";

export default {
    name: 'About Me',
    icon: 'question.png',
    description: 'Everything about who I am',
    view: {
        title: 'About Me',
        image: 'kevin-pfp.jpg',
        image_description: 'Kevin Villagrán',
        image_subdescription: 'Software Developer',
        description: 'I\'m a current Computer Science student based in Guatemala with a strong passion for technology and creativity. I work as a part-time web developer and also develop video games as a hobby. I\'m always exploring new ways to build engaging digital experiences, both on the web and through interactive gameplay.',
        background: 'question.png',
        sections: [
            Discord,
            Instagram,
        ]
    }
}
import GitHub from "./GitHub";
import Itchio from "./Itchio";
import Linkedin from "./Linkedin";
import Mail from "./Mail";

export default {
    name: 'Contact',
    icon: 'internet.png',
    description: 'Find different ways of contacting me',
    view: {
        title: 'Contact',
        description: 'You can reach me out with the following',
        background: 'internet.png',
        sections: [
            Mail,
            GitHub,
            Itchio,
            Linkedin,
        ]
    }
}
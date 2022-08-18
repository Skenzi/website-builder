import { Elements } from "../types/types";
import { handlerElementTemplate, addListenerMouseHover } from "../utils";
import { addTemplateDropdown } from "./Dropdown";

export default (elements: Elements) => {
    const header = document.createElement('header');
    header.classList.add('template', 'template-header')
    addListenerMouseHover(header);
    addTemplateDropdown(header, handlerElementTemplate(header));

    const main = document.createElement('main');

    const section1 = document.createElement('section');
    section1.classList.add('template', 'template-main__item');
    addListenerMouseHover(section1);
    addTemplateDropdown(section1, handlerElementTemplate(section1));

    const section2 = document.createElement('section');
    section2.classList.add('template', 'template-main__item');
    addListenerMouseHover(section2);
    addTemplateDropdown(section2, handlerElementTemplate(section2));

    const section3 = document.createElement('section');
    section3.classList.add('template', 'template-main__item');
    addListenerMouseHover(section3);
    addTemplateDropdown(section3, handlerElementTemplate(section3));

    main.append(section1, section2, section3);
    main.classList.add('template-main')

    const footer = document.createElement('footer');
    footer.classList.add('template', 'template-footer')
    addListenerMouseHover(footer);
    addTemplateDropdown(footer, handlerElementTemplate(footer));

    elements.templateContainer?.append(header, main, footer);
}
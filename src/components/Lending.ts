import { Elements } from "../types/types";
import { handlerElementTemplate, addListenerMouseHover, menuElements, menuContainers } from "../utils";
import { addTemplateDropdown } from "./Dropdown";

export default (elements: Elements) => {
    const header = document.createElement('header');
    header.classList.add('template', 'template-header')
    addTemplateDropdown(header, handlerElementTemplate(header), menuElements);
    addListenerMouseHover(header);

    const main = document.createElement('main');
    main.classList.add('template', 'template-main')
    addTemplateDropdown(main, handlerElementTemplate(main), menuContainers);
    addListenerMouseHover(main);

    const footer = document.createElement('footer');
    footer.classList.add('template', 'template-footer')
    addTemplateDropdown(footer, handlerElementTemplate(footer), menuElements);
    addListenerMouseHover(footer);

    elements.templateContainer?.append(header, main, footer);
}
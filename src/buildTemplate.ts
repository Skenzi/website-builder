import { Elements } from "./types/types";

const addTemplateDropdown = (element: Element) => {
    const menuDiv = document.createElement('div');
    menuDiv.textContent = '123';
    menuDiv.classList.add('menu-elements');

    const btnAdd = document.createElement('button');
    btnAdd.textContent = '+';
    btnAdd.classList.add('btn', 'btn-add');

    btnAdd.addEventListener('click', () => {
        menuDiv.classList.toggle('active');
    });

    element.appendChild(btnAdd);
    element.appendChild(menuDiv);
}

const addListenerMouseHover = (element: Element) => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('active');
    })
    element.addEventListener('mouseleave', () => {
        element.classList.remove('active');
    })
}

const createTemplateLending = (elements: Elements) => {
    const header = document.createElement('header');
    header.classList.add('template', 'template-header')
    addListenerMouseHover(header);
    addTemplateDropdown(header);

    const main = document.createElement('main');
    main.classList.add('template', 'template-main')
    addListenerMouseHover(main);
    addTemplateDropdown(main);

    const footer = document.createElement('footer');
    footer.classList.add('template', 'template-footer')
    addListenerMouseHover(footer);
    addTemplateDropdown(footer);

    elements.templateContainer?.appendChild(header);
    elements.templateContainer?.appendChild(main);
    elements.templateContainer?.appendChild(footer);
}

const buildTemplate = (activeTemplate: any, elements: Elements) => {
    if(elements.templateContainer) {
        elements.templateContainer.textContent = '';
    }
    switch(activeTemplate) {
        case 'lending': {
            createTemplateLending(elements);
        }
    }
}

export default buildTemplate;

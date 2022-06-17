import { Elements } from "./types/types";

interface MenuItem {
    type: string,
    content: string,
}

const clickHandler = (container: Element) => (elementType: string) => {
    const element = document.createElement(elementType);
    element.textContent = 'test';
    container.appendChild(element);
}

const addMenuItems = (container: Element, menuItems: MenuItem[], handler: (elementType: string) => void) => {
    for(const menuItem of menuItems) {
        const element = document.createElement('button');
        element.addEventListener('click', () => {
            handler(menuItem.type);
            container.classList.remove('active');
        });
        element.textContent = menuItem.content;
        container.appendChild(element);
    }
}

const addTemplateDropdown = (container: Element, handler: (elementType: string) => void) => {
    const menuItems = [
        {
            type: 'h1',
            content: 'Заголовок h1'
        },
        {
            type: 'h2',
            content: 'Заголовок h2'
        },
        {
            type: 'h3',
            content: 'Заголовок h3'
        },
        {
            type: 'p',
            content: 'Абзац текста'
        },
        {
            type: 'img',
            content: 'Изображение'
        }
    ];

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-elements');
    addMenuItems(menuDiv, menuItems, handler);
    menuDiv.addEventListener('mouseleave', () => {
        menuDiv.classList.remove('active');
    })
    container.addEventListener('mouseleave', () => {
        menuDiv.classList.remove('active');
    })

    const btnAdd = document.createElement('button');
    btnAdd.textContent = '+';
    btnAdd.classList.add('btn', 'btn-add');

    btnAdd.addEventListener('click', () => {
        menuDiv.classList.toggle('active');
    });

    container.append(btnAdd, menuDiv);
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
    addTemplateDropdown(header, clickHandler(header));

    const main = document.createElement('main');
    main.classList.add('template', 'template-main')
    addListenerMouseHover(main);
    addTemplateDropdown(main, clickHandler(main));

    const footer = document.createElement('footer');
    footer.classList.add('template', 'template-footer')
    addListenerMouseHover(footer);
    addTemplateDropdown(footer, clickHandler(footer));

    elements.templateContainer?.append(header, main, footer);
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

import { Elements } from "./types/types";

interface MenuItem {
    type: string,
    content: string,
}

const clickHandler = (container: Element) => (elementType: string) => {
    const element = document.createElement('div');
    const classElement = `template-${elementType}`;
    element.classList.add('template-element', classElement);

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'x';
    btnRemove.classList.add('hidden', 'btn', 'btn-rm');
    btnRemove.addEventListener('click', () => {
        container.removeChild(element);
        if(container.childElementCount <= 2) {
            container.classList.remove('no-border');
        }
    })

    element.textContent = 'test';
    element.append(btnRemove);
    
    element.addEventListener('mouseenter', () => {
        btnRemove.classList.remove('hidden');
    })
    element.addEventListener('mouseleave', () => {
        btnRemove.classList.add('hidden');
    })

    container.appendChild(element);
    container.classList.add('no-border')
}

const addMenuItems = (container: Element, menuItems: MenuItem[], handler: (elementType: string) => void) => {
    for(const menuItem of menuItems) {
        const element = document.createElement('button');
        element.classList.add('dropdown-menu__item');
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
    menuDiv.classList.add('dropdown-menu', 'hidden');
    addMenuItems(menuDiv, menuItems, handler);
    menuDiv.addEventListener('mouseleave', () => {
        menuDiv.classList.add('hidden');
    })
    container.addEventListener('mouseleave', () => {
        menuDiv.classList.add('hidden');
    })

    const btnAdd = document.createElement('button');
    btnAdd.textContent = '+';
    btnAdd.classList.add('btn', 'btn-add');

    btnAdd.addEventListener('click', () => {
        menuDiv.classList.toggle('hidden');
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
    addTemplateDropdown(header, clickHandler(header));
    addListenerMouseHover(header);

    const main = document.createElement('main');
    main.classList.add('template', 'template-main')
    addTemplateDropdown(main, clickHandler(main));
    addListenerMouseHover(main);

    const footer = document.createElement('footer');
    footer.classList.add('template', 'template-footer')
    addTemplateDropdown(footer, clickHandler(footer));
    addListenerMouseHover(footer);

    elements.templateContainer?.append(header, main, footer);
}

const createTemplateBlog = (elements: Elements) => {
    const header = document.createElement('header');
    header.classList.add('template', 'template-header')
    addListenerMouseHover(header);
    addTemplateDropdown(header, clickHandler(header));

    const main = document.createElement('main');

    const section1 = document.createElement('section');
    section1.classList.add('template', 'template-main__item');
    addListenerMouseHover(section1);
    addTemplateDropdown(section1, clickHandler(section1));

    const section2 = document.createElement('section');
    section2.classList.add('template', 'template-main__item');
    addListenerMouseHover(section2);
    addTemplateDropdown(section2, clickHandler(section2));

    main.append(section1, section2);
    main.classList.add('template-main', 'template-blog-main')

    const footer = document.createElement('footer');
    footer.classList.add('template', 'template-footer')
    addListenerMouseHover(footer);
    addTemplateDropdown(footer, clickHandler(footer));

    elements.templateContainer?.append(header, main, footer);
}

const createTemplateShop = (elements: Elements) => {
    const header = document.createElement('header');
    header.classList.add('template', 'template-header')
    addListenerMouseHover(header);
    addTemplateDropdown(header, clickHandler(header));

    const main = document.createElement('main');

    const section1 = document.createElement('section');
    section1.classList.add('template', 'template-main__item');
    addListenerMouseHover(section1);
    addTemplateDropdown(section1, clickHandler(section1));

    const section2 = document.createElement('section');
    section2.classList.add('template', 'template-main__item');
    addListenerMouseHover(section2);
    addTemplateDropdown(section2, clickHandler(section2));

    const section3 = document.createElement('section');
    section3.classList.add('template', 'template-main__item');
    addListenerMouseHover(section3);
    addTemplateDropdown(section3, clickHandler(section3));

    main.append(section1, section2, section3);
    main.classList.add('template-main')

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
            break;
        }
        case 'blog': {
            createTemplateBlog(elements);
            break;
        }
        case 'shop': {
            createTemplateShop(elements);
            break;
        }
        default: {
            new Error('Unexpected template: ' + activeTemplate)
        }
    }
}

export default buildTemplate;

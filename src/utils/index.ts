import { addTemplateDropdown } from "../components/Dropdown";
import { DropdownItem } from "../types/types";

export const handlerElementTemplate = (container: Element) => (elementData: DropdownItem) => {
    const element = document.createElement('div');
    const classElement = `template-${elementData.tag}`;
    element.classList.add(classElement);

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
    if(elementData.type === 'container') {
        addTemplateDropdown(element, handlerElementTemplate(element), menuElements);
        element.classList.add('template-block');
    } else {
        element.classList.add('template-element');
    }
    
    element.addEventListener('mouseenter', () => {
        btnRemove.classList.remove('hidden');
    })
    element.addEventListener('mouseleave', () => {
        btnRemove.classList.add('hidden');
    })

    container.appendChild(element);
    container.classList.add('no-border')
}

export const addListenerMouseHover = (element: Element) => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('active');
    })
    element.addEventListener('mouseleave', () => {
        element.classList.remove('active');
    })
}

export const menuElements = [
    {
        type: 'element',
        content: 'Заголовок h1',
        tag: 'h1'
    },
    {
        tag: 'h2',
        content: 'Заголовок h2',
        type: 'element',
    },
    {
        tag: 'h3',
        content: 'Заголовок h3',
        type: 'element',
    },
    {
        tag: 'p',
        content: 'Абзац текста',
        type: 'element',
    },
    {
        tag: 'img',
        content: 'Изображение',
        type: 'element',
    }
];

export const menuContainers = [
    {
        tag: 'div',
        content: 'DIV',
        type: 'container',
    },
    {
        tag: 'section',
        content: 'Section',
        type: 'container',
    },
    {
        tag: 'article',
        content: 'Article',
        type: 'container',
    },
    {
        tag: 'p',
        content: 'Абзац текста',
        type: 'container',
    }
];
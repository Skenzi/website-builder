import { DropdownItem, DropdownItems } from "../types/types";

export const addMenuItems = (container: Element, menuItems: DropdownItem[], createElementTemplate: (elementData: DropdownItem) => void) => {
    for(const menuItem of menuItems) {
        const element = document.createElement('button');
        element.classList.add('dropdown-menu__item');
        element.addEventListener('click', () => {
            createElementTemplate(menuItem);
            container.classList.add('hidden');
        });
        element.textContent = menuItem.content;
        container.appendChild(element);
    }
}

export const addTemplateDropdown = (container: Element, createElementTemplate: (elementData: DropdownItem) => void, menuItems: DropdownItems = []) => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('dropdown-menu', 'hidden');
    addMenuItems(menuDiv, menuItems, createElementTemplate);
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
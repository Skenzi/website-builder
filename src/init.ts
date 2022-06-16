import './styles/app.scss';
import { State, Elements } from './types/types';
import watcherState from './watcherState';

const addListenersMenuItems = (state: State) => {
    const menuItems = document.querySelectorAll('.template-menu__item');
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            const id = (item as HTMLElement).dataset.id;
            if(id) {
                state.activeTemplate = id;
            }
        })
    })
}

const init = () => {
    const state: State = {
        activeTemplate: 'first'
    }
    const elements: Elements = {
        templateContainer: document.querySelector('.template-container'),
    }
    const watchedState = watcherState(state, elements);
    addListenersMenuItems(watchedState);
}

export default init;
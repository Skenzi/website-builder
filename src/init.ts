import { State } from './types/types';
import watcherState from './watcherState';

const addListenersMenuItems = (state: State) => {
    const menuItems = document.querySelectorAll('.template-menu__item');
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            const id = (item as HTMLElement).dataset.id;
            console.log(id)
        })
    })
}

const init = () => {
    const state: State = {
        activeTemplate: 'first'
    }
    const watchedState = watcherState(state);
    addListenersMenuItems(watchedState);
}

export default init;
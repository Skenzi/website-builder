import onChange from 'on-change';
import buildTemplate from './buildTemplate';
import { State, Elements } from './types/types';

export default (state: State, elements: Elements) => onChange(state, function (path, value) {
    switch(path) {
        case 'activeTemplate': {
            buildTemplate(value, elements);
            break;
        }
        default: {
            new Error('Unknown path: ' + path)
        }
    }
})
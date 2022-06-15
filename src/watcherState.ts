import onChange from 'on-change';
import buildTemplate from './buildTemplate';
import { State } from './types/types';

export default (state: State) => onChange(state, function (path, value) {
    switch(path) {
        case 'activeTemplate': {
            buildTemplate(value);
        }
        default: {
            new Error('Unknown path: ' + path)
        }
    }
})
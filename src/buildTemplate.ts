import { Elements } from "./types/types";
import createTemplateLending from "./components/Lending";
import createTemplateShop from './components/Shop';
import createTemplateBlog from './components/Blog';

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

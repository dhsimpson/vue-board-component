import type {App} from 'vue';
import { Board } from './components';

interface ObjectWidthName {
    name: string
}

export default {
    install: (app: App, options: ObjectWidthName = {name: ''}) => {
        app.component(options.name || 'board', Board);
    }
}

export {Board};
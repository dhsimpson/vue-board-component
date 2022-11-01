import type {App} from 'vue';
import { Board, CardListBoard } from './components';

interface ObjectWidthName {
    boardName: string,
    cardListBoardName: string
}

export default {
    install: (app: App, options: ObjectWidthName = {boardName: '', cardListBoardName: ''}) => {
        app.component(options.boardName || 'board', Board);
        app.component(options.cardListBoardName || 'cardListBoard', CardListBoard);
    }
}

export {Board};
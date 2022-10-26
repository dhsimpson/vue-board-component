import Board from './components/Board';

const defaultComponentName = 'modal'

export default {
    install(app, options= {}) {

        this.componentName = options.componentName || defaultComponentName
        app.component(this.componentName, Board)
    }

}
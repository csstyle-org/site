import Nav from './Nav';
import EventHandler from './EventHandler';

export default class App {
    constructor () {
        this.Nav = new Nav;
        this.EventHandler = new EventHandler(this);
    }
};
